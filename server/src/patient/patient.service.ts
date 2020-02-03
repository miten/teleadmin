import { Injectable } from '@nestjs/common';
import { patient} from './../fakedatas';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { _ } from 'lodash';

@Injectable()
export class PatientService {

    patients = [];

    constructor(@InjectModel('Patient') private readonly patientModel: Model<any>) {}

    async getPatientById(id: string): Promise<object> {
        return this.patientModel.findById(id).exec;
    }

    async getPatient(type, value): Promise<object> {
        return patient.find(employee => employee[type] == value);
    }

    async addPatient(params): Promise<object> {
        patient.push(params);
        return _.last(patient);
    }

}
