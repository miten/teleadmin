import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EmployeesModule } from './employees/employees.module';
import { PatientModule } from './patient/patient.module';
import {MongooseModule} from '@nestjs/mongoose';
import { SessionController } from './session/session.controller';
import { SessionService } from './session/session.service';
import { SessionModule } from './session/session.module';
import { LivestreamGateway } from './livestream/livestream.gateway';
import { LivestreamModule } from './livestream/livestream.module';

@Module({
  imports: [
      AuthModule,
      EmployeesModule,
      PatientModule,
      MongooseModule.forRoot('mongodb://localhost/teleadmin'),
      SessionModule,
      LivestreamModule,
  ],
  controllers: [AppController, SessionController],
  providers: [
      AppService,
      SessionService,
      LivestreamGateway,
  ],
  exports: [
  ],
})
export class AppModule {}
