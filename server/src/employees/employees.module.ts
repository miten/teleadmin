import { Module } from '@nestjs/common';

import { EmployeesController } from './Employees.controller';
import { EmployeesService } from './Employees.service';
import {MongooseModule} from '@nestjs/mongoose';
import {AccSchema, MedecinSchema} from './schema/employee.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Medecin', schema: MedecinSchema },
            { name: 'Acc', schema: AccSchema },
    ]),
    ],
    controllers: [EmployeesController],
    providers: [EmployeesService],
    exports: [EmployeesService],
})
export class EmployeesModule {}
