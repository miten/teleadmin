import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { EmployeesModule } from './employees/employees.module';
import { PatientModule } from './patient/patient.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';


const MONGO = process.env.MONGODB_URI || 'mongodb://localhost/nest';

@Module({
  imports: [
      AuthModule,
      EmployeesModule,
      PatientModule,
/*      MongooseModule.forRoot(MONGO, {
          useNewUrlParser: true,
      }),*/
  ],
  controllers: [AppController],
  providers: [
      AppService,
      {
          provide: APP_GUARD,
          useClass: RolesGuard,
      },
  ],
  exports: []
})
export class AppModule {}
