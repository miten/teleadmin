import { Module } from '@nestjs/common';

import { EmployeesController } from './Employees.controller';
import { EmployeesService } from './Employees.service';
import {MongooseModule} from '@nestjs/mongoose';
import {EmployeeSchema} from './schema/employee.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Employee', schema: EmployeeSchema },
    ]),
    ],
    controllers: [EmployeesController],
    providers: [EmployeesService],
    exports: [EmployeesService],
})
export class EmployeesModule {}
