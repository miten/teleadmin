import { Controller, Get, Request, Post, Param, UseGuards, Logger, Res, Render, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
const logger = new Logger();

@Controller('auth')

export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('login')
    login(@Body() user: object) {
        return this.authService.login(user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    me(@Body() user: object, @Request() req) {
        logger.log(req.user);
        return this.authService.getMe(req.user._id);
    }

/*        @Post('register')
        async register(@Body() req) {
            const newUser = await this.userService.createUser(req);
            return this.authService.login(newUser);
        }
*/

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getProfile(@Request() req) {
        return req.user;
    }
}
