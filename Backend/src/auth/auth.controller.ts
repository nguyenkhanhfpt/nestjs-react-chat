import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

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
}
