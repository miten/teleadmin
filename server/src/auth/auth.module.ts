import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { EmployeesModule} from '../employees/employees.module';
import {MongooseModule} from '@nestjs/mongoose';
import {LoginSchema} from './schema/login.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Login', schema: LoginSchema },
    ]),
    EmployeesModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '50000s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
