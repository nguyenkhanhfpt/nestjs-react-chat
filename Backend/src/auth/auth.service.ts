import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PayloadDto } from './dto/payload.dto';
import * as argon2 from 'argon2';
import { responseError } from './../common/exceptions/api.exception';
import { UsersService } from 'src/users/users.service';
import { SignUpDto } from './dto/sign_up.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private usersService: UsersService,
  ) {}

  async signIn(authDto: AuthDto) {
    let user = await this.usersService.findOneBy({
      email: authDto.email,
    });

    if (!user) {
      return responseError(400, {}, 'Invalid email');
    }

    if (!(await argon2.verify(user.password, authDto.password))) {
      return responseError(400, {}, 'Invalid user');
    }

    let { accessToken, refreshToken } = await this.createToken({
      id: user.id,
      username: user.username,
      email: user.email,
    });
    await this.updateRefreshToken(user.id, refreshToken);

    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  async signUp(signUphDto: SignUpDto) {
    let user = await this.usersService.findOneBy({
      email: signUphDto.email,
    });

    if (user) {
      return responseError(400, {}, 'Email already exist!');
    }

    if (
      await this.usersService.findOneBy({
        username: signUphDto.username,
      })
    ) {
      return responseError(400, {}, 'Username already exist!');
    }

    let userEntity = new User();
    Object.assign(userEntity, signUphDto);
    userEntity.avatar = 'user.jpg'; // TODO

    userEntity.password = await this.hashData(signUphDto.password);

    user = await this.usersService.create(userEntity);

    let { accessToken, refreshToken } = await this.createToken({
      id: user.id,
      username: user.username,
      email: user.email,
    });
    await this.updateRefreshToken(user.id, refreshToken);

    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  async createToken(data: PayloadDto) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: data.id,
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: data.id,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '30m',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async updateRefreshToken(userId, refreshToken) {
    const hashedRefreshToken = await this.hashData(refreshToken);

    return await this.usersService.update(userId, {
      refreshToken: hashedRefreshToken,
    });
  }

  async hashData(value: string | Buffer): Promise<string> {
    return await argon2.hash(value);
  }
}
