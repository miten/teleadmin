import {Controller, Get, Post, Query, Param, UseGuards, SetMetadata, Logger} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import  {RolesGuard} from '../guards/roles.guard'
import  {Roles} from '../guards/roles.decorator'
import { AuthGuard } from '@nestjs/passport';
const logger = new Logger();


@Controller('employee')
export class EmployeesController {
    constructor(private readonly Employeeservice: EmployeesService) {}


    @Get('session')
//    @Roles('admin')
    sessionId(): number {
        return this.Employeeservice.getSessionId();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    @Roles(1,2)
    async employee(@Param('id') id: number) {
        return this.Employeeservice.getEmployeeInfos(id);
    }


}
