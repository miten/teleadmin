import {Controller, Get, Param, Logger, Post, Body} from '@nestjs/common';
import { PatientService } from './patient.service';

const logger = new Logger();

@Controller('patient')
export class PatientController {
    constructor(private readonly patientService: PatientService) {}

    @Get(':id')
    getPatientById(@Param('id') id) {
        return this.patientService.getPatientById(id);
    }


    @Get(':type/:value')
    getEmployees(@Param('type') type, @Param('value') value) {
        return this.patientService.getPatient(type, value);
    }


    @Post()
    addPatient(@Body() datas: any): object {
        logger.log(this.patientService.addPatient(datas));
        return this.patientService.addPatient(datas);
    }

}
