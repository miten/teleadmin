import { Controller, Get, Request, Post, UseGuards, Logger, Body } from '@nestjs/common';
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

    @Get('test')
    test(@Body() user: object, @Request() req) {
        return 'test';
    }


    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    me(@Body() user: object, @Request() req) {
        logger.log(req.user);
        return this.authService.getMe(req.user._id);
    }

    @Post('register')
    registerEmployee(@Body() datas) {
       return this.authService.register(datas);
    }


    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getProfile(@Request() req) {
        return req.user;
    }
}
