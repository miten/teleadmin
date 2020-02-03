import {Controller, Get, Param, UseGuards, Logger, SetMetadata, Post, Res, ParseIntPipe} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Roles } from '../guards/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import {RolesGuard} from '../guards/roles.guard';
const logger = new Logger();

@Controller('employee')
export class EmployeesController {
    constructor(private readonly Employeeservice: EmployeesService) {}


    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(0)
    @Post()
    addEmployee(@Param('id') id: number) {
        return this.Employeeservice.addEmployee(id);
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(1, 2)
    @Get(':id')
    getEmployeeById(@Param('id') id: string) {
        return this.Employeeservice.getEmployeeById(id);
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(1, 2)
    @Get(':type/:value')
    getEmployees(@Param('type') type, @Param('value') value) {
        return this.Employeeservice.getEmployees(value, type);
    }
}
