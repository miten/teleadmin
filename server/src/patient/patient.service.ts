import { Injectable } from '@nestjs/common';
import {patient} from './../fakedatas';


@Injectable()
export class PatientService {

    getPatientInfos(params): object {
        return patient.find(customer => customer.name == params);
    }
}
