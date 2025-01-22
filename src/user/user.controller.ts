import { Controller, Get, Request } from '@nestjs/common';
import { UserService } from './user.service';
import removeProperties from 'src/utils/removeProperties';
import { CustomRequest } from 'src/utils/customRequest';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Jobs')
@ApiBearerAuth()
@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Successfully retrieved jobs.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findAll() {
    const users = await this.userService.users({});
    const usersWithoutPassword = users.map((user) =>
      removeProperties(user, 'user_pass'),
    );
    return usersWithoutPassword;
  }

  async findMe(@Request() req: CustomRequest) {
    const user = await this.userService.user({
      id: req.user.id,
    });
    return removeProperties(user, 'user_pass');
  }
}
