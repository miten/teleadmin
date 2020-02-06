import {Controller, Get, Param, UseGuards, Logger, Post, Body, Request, Patch } from '@nestjs/common';
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
    addMedecin(@Body() datas: any) {
        return this.Employeeservice.addMedecin(datas);
    }

    @Post()
    addAcc(@Body() datas: any) {
        return this.Employeeservice.addAcc(datas);
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(1, 2)
    @Get(':id')
    getEmployee(@Param('id') id) {
        return this.Employeeservice.getEmployee(id);
    }

    @Patch()
    modifyEmployee(@Body() datas: any, @Request() req) {
        return this.Employeeservice.modifyEmployee('5e397872e408f156acd3d474', datas);
    }


    @Get(':type/:value')
    getEmployees(@Param('type') type, @Param('value') value) {
        return this.Employeeservice.getEmployees(type, value);
    }

}
