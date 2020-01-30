import { Module } from '@nestjs/common';

import { EmployeesController } from './Employees.controller';
import { EmployeesService } from './Employees.service';


@Module({
    imports: [],
    controllers: [EmployeesController],
    providers: [EmployeesService],
    exports: [EmployeesService],
})
export class EmployeesModule {}
