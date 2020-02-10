import {Injectable, NotFoundException, Logger} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {isNumber} from "../functions";
const logger = new Logger();

@Injectable()
export class PatientService {

    patients = [];

    constructor(@InjectModel('Patient') private readonly patientModel: Model<any>) {}

    async getPatient(id: string): Promise<object | any | NotFoundException> {
        try {
            return await this.patientModel.findById(id);
        } catch (e) {
            return new NotFoundException(e);
        }
    }

    async getPatients(value: string): Promise<object | NotFoundException> {
        try {
            if (isNumber(value)) {
                return await this.patientModel.find({secu: value});
            } else {
                return await this.patientModel.find({name: value});
            }
        } catch (e) {
            return new NotFoundException(e);
        }
    }

    async addPatient(datas): Promise<any> {
        try {
            return await this.patientModel.create(datas);
        } catch (e) {
            return new NotFoundException(e);
        }
    }

    async modifyPatient(datas: object | any): Promise<any> {
        try {
            const user = await this.patientModel.findById(datas._id);
            await user.updateOne(datas);
            await user.save();
            return await this.patientModel.findById(datas._id);
        } catch (e) {
            return new NotFoundException(e);
        }
    }

    async deletePatient(datas: object | any): Promise<any> {
        try {
            const user = await this.patientModel.findById(datas.id);
            await user.remove();
        } catch (e) {
            return new NotFoundException(e);
        }
    }

}
