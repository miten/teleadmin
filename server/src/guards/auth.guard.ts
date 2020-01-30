import { Injectable, CanActivate, Request, ExecutionContext, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { SetMetadata } from '@nestjs/common';
const logger = new Logger();
import { AuthGuard } from '@nestjs/passport';


@Injectable()
export class MyAuthGuard extends AuthGuard('jwt') {

    handleRequest(err, user, info: Error) {
        // don't throw 401 error when unauthenticated
        return user;
    }

}
