import { Injectable } from '@nestjs/common';
import {patient} from './../fakedatas';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';


@Injectable()
export class PatientService {

    constructor(@InjectModel('Patient') private readonly patientModel: Model<any>) {}

    getPatientInfos(params): object {
        return patient.find(customer => customer.name == params);
    }
}
