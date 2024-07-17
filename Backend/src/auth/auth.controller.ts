import { Body, Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('login')
  signIn(@Body() authDto: AuthDto) {
    let auth = {
        username: '12',
        password: '123'
    }

    return this.authService.signIn(auth);
  }
}
