import {Controller, Get, Param, Logger, Post, Body, Patch, Delete} from '@nestjs/common';
import { PatientService } from './patient.service';

const logger = new Logger();

@Controller('patient')
export class PatientController {
    constructor(private readonly patientService: PatientService) {}

    @Get(':id')
    getPatient(@Param('id') id) {
        return this.patientService.getPatient(id);
    }


    @Get(':type/:value')
    getPatients(@Param('type') type, @Param('value') value) {
        return this.patientService.getPatients(type, value);
    }


    @Post()
    addPatient(@Body() datas: any): object {
        return this.patientService.addPatient(datas);
    }


    @Patch()
    modifyPatient(@Body() datas: any): object {
        return this.patientService.modifyPatient(datas);
    }


    @Delete()
    deletePatient(@Body() datas: any): object {
        return this.patientService.deletePatient(datas);
    }

}
