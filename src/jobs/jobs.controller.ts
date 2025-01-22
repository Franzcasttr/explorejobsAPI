import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Jobs')
@ApiBearerAuth()
@Controller('api/v1/jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, description: 'Successfully retrieved jobs.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAllPost(
    @Param('page') page: number = 1,
    @Param('limit') limit: number = 15,
  ) {
    return this.jobsService.findAllPost(page, limit);
  }
}
