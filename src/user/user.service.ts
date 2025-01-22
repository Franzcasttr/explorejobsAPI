import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma, wp_user } from '@prisma/client';
import { PrismaService } from 'src/module/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(data: Prisma.wp_userCreateInput): Promise<wp_user> {
    try {
      return await this.prismaService.wp_user.create({
        data: {
          ...data,
          user_pass: await bcrypt.hash(data.user_pass, 10),
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Email already exists');
      }
      throw error;
    }
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.wp_userWhereUniqueInput;
    where?: Prisma.wp_userWhereInput;
    orderBy?: Prisma.wp_userOrderByWithRelationInput;
  }): Promise<wp_user[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prismaService.wp_user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async user(
    userWhereUniqueInput: Prisma.wp_userWhereUniqueInput,
  ): Promise<wp_user | null> {
    return this.prismaService.wp_user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async deleteUser(where: Prisma.wp_userWhereUniqueInput): Promise<wp_user> {
    return this.prismaService.wp_user.delete({
      where,
    });
  }

  async exists(where: Prisma.wp_userWhereInput): Promise<boolean> {
    const user = await this.prismaService.wp_user.findFirst({ where });
    return Boolean(user);
  }
}
