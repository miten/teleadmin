import { Injectable, CanActivate, Request, ExecutionContext, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { SetMetadata } from '@nestjs/common';
const logger = new Logger();

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<number[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const req = context.switchToHttp().getRequest();
        const user = req.user;
        logger.log(user);
        //const user = {status: 2};
        const status = roles.includes(user.status);
        return status
    }
}
