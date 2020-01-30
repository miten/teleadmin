import {Controller, Get, Query, Param, UseGuards, SetMetadata, Logger} from '@nestjs/common';
import { PatientService } from './patient.service';
import  {RolesGuard} from '../guards/roles.guard'
import  {Roles} from '../guards/roles.decorator'
const logger = new Logger();


@Controller('patient')
export class PatientController {
    constructor(private readonly patientService: PatientService) {}

    @Get(':id')
    getCustomerInfos(@Param('id') id: number): object {
        return this.patientService.getPatientInfos(id);
    }

}
