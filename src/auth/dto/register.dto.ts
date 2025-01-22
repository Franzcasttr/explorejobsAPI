import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RegisterDto implements Prisma.wp_userCreateInput {
  @ApiProperty({ example: 'john_doe' })
  @IsNotEmpty()
  @IsString()
  user_login: string;

  @ApiProperty({ example: 'securePassword123' })
  @IsNotEmpty()
  @IsString()
  user_pass: string;

  @ApiProperty({ example: 'John' })
  @IsString()
  @IsOptional()
  user_nicename: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  user_email: string;

  @ApiProperty({ example: 'https://example.com/johndoe' })
  @IsOptional()
  user_url: string;

  @ApiProperty({ example: 'abc123' })
  @IsOptional()
  user_activation_key: string;

  @ApiProperty({ example: 1 })
  @IsOptional()
  user_status: number;

  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  display_name: string;
}
