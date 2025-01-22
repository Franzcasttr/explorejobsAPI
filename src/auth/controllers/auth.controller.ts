import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from '../dto/register.dto';
import { Public } from 'src/decorator/public.decorator';
import removeProperties from 'src/utils/removeProperties';
import { CustomRequest } from 'src/utils/customRequest';
import { LocalAuthGuard } from '../guards/local.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../dto/login.dto';

@ApiTags('Authentication')
@Controller('api/v1/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Public()
  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User  registered successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 409, description: 'Conflict.' })
  async register(@Body() body: RegisterDto) {
    const user = await this.userService.create(body);
    return removeProperties(user, 'user_pass');
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'Login a user' })
  @ApiResponse({ status: 200, description: 'User  logged in successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async login(@Body() body: LoginDto, @Request() req: CustomRequest) {
    const accessToken = await this.authService.login(req.user);
    return {
      access_token: accessToken,
      user: removeProperties(req.user, 'user_pass'),
    };
  }
}
