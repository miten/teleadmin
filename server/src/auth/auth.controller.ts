import { Controller, Get, Request, Post, Param, UseGuards, Logger, Res, Render, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
const logger = new Logger();

@Controller('auth')

export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    login(@Body() user: object) {
        return this.authService.login(user);
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
