import {Controller, Get, Query, Param, UseGuards, SetMetadata, Logger} from '@nestjs/common';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
    constructor(private readonly patientService: PatientService) {}

    @Get(':id')
    getCustomerInfos(@Param('id') id: number): object {
        return this.patientService.getPatientInfos(id);
    }

}
