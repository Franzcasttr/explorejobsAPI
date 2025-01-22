import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/module/prisma/prisma.service';

@Injectable()
export class JobsService {
  constructor(private prismaService: PrismaService) {}

  async findAllPost(page: number = 1, limit: number = 15) {
    try {
      const skip = (page - 1) * limit;
      const posts = await this.prismaService.wp_posts.findMany({
        skip,
        take: limit,
        orderBy: {
          post_date: 'desc',
        },
      });

      const totalPosts = await this.prismaService.wp_posts.count();

      return {
        currentPage: page,
        totalPages: Math.ceil(totalPosts / limit),
        totalPosts,
        posts,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
