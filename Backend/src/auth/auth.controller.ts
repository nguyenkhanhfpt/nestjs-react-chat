import { Body, Controller, Get, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { SignUpDto } from './dto/sign_up.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async signIn(@Body() authDto: AuthDto, @Res() res) {
    let signInData = await this.authService.signIn(authDto);

    return res.json({
      status: 200,
      data: signInData,
    });
  }

  @Post('signup')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async signUp(@Body() signUphDto: SignUpDto, @Res() res) {
    let signUpData = await this.authService.signUp(signUphDto);

    return res.json({
      status: 200,
      data: signUpData,
    });
  }
}
