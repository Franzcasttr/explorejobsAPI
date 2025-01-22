import { wp_user } from '@prisma/client';
import { Request } from 'express';

export interface CustomRequest extends Request {
  user: wp_user;
}
