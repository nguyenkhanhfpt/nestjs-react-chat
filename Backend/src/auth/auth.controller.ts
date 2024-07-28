import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { SignUpDto } from './dto/sign_up.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { RefreshTokenGuard } from 'src/common/guards/refreshToken.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('signin')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async signIn(@Body() authDto: AuthDto, @Res() res) {
    let signInData = await this.authService.signIn(authDto);

    return res.json({
      status: 200,
      data: signInData,
    });
  }

  @Public()
  @Post('signup')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async signUp(@Body() signUphDto: SignUpDto, @Res() res) {
    let signUpData = await this.authService.signUp(signUphDto);

    return res.json({
      status: 200,
      data: signUpData,
    });
  }

  @Post('logout')
  async logout(@Req() req, @Res() res) {
    const userId = req.user.sub;

    return res.json({
      status: 200,
      data: await this.authService.logout(userId)
    })
  }
  
  @Public()
  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  async refreshToken(@Req() req, @Res() res) {
    const userId = req.user.sub;
    const refreshToken = req.user.refreshToken;

    let tokens = await this.authService.refreshTokens(userId, refreshToken);

    return res.json({
      status: 200,
      data: tokens,
    });
  }
}
