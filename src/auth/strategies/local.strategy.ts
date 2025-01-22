import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'user_email', passwordField: 'user_pass' });
  }

  async validate(key: string, password: string) {
    const user = await this.authService.validateUserByPassword(key, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
