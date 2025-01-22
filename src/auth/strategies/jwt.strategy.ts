import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
import { JWTPayload } from '../dto/jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserService,
    readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow('JWT_SECRET'),
    });
  }
  async validate(payload: JWTPayload) {
    const user = await this.userService.user({
      id: payload.sub,
    });

    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }
    return user;
  }
}
