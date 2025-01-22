import { Injectable } from '@nestjs/common';
import { wp_user } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { JWTPayload } from '../dto/jwt.payload';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUserByPassword(key: string, pass: string): Promise<wp_user> {
    const user = await this.usersService.user({
      user_email: key,
    });
    if (!user) return null;
    const isPasswordValid = await bcrypt.compare(pass, user.user_pass);

    if (isPasswordValid) {
      return user;
    }
    return null;
  }

  async login(user: wp_user) {
    const payload: JWTPayload = {
      sub: user.id,
    };
    return this.jwtService.sign(payload);
  }
}
