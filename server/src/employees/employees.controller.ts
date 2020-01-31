import {Controller, Get, Param, UseGuards, Logger, SetMetadata} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Roles } from '../guards/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import {RolesGuard} from '../guards/roles.guard'
const logger = new Logger();


@Controller('employee')
export class EmployeesController {
    constructor(private readonly Employeeservice: EmployeesService) {}


    @Get('session')
//    @Roles('admin')
    sessionId(): number {
        return this.Employeeservice.getSessionId();
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(1, 2)
    @Get(':id')
    async employee(@Param('id') id: number) {
        return this.Employeeservice.getEmployeeInfos(id);
    }
}
