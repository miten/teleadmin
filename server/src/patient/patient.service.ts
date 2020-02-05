import {Injectable, NotFoundException, Logger} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
const logger = new Logger();

@Injectable()
export class PatientService {

    patients = [];

    constructor(@InjectModel('Patient') private readonly patientModel: Model<any>) {}

    async getPatient(id: string): Promise<object | NotFoundException> {
        try {
            const user = await this.patientModel.findById(id);
            return user;
        } catch (e) {
            return new NotFoundException(e);
        }
    }

    async getPatients(type, value): Promise<object | NotFoundException> {
        try {
            const user = await this.patientModel.find({secu: value});
            return user;
        } catch (e) {
            return new NotFoundException(e);
        }
    }

    async addPatient(params): Promise<any> {
        try {
            const user = await this.patientModel.create(params);
            return user;
        } catch (e) {
            return new NotFoundException(e);
        }
    }

    async modifyPatient(datas: object | any): Promise<any> {
        try {
            const user = await this.patientModel.findById(datas.id);
            await user.updateOne(user);
            await user.save();
            return await this.patientModel.findById(user._id);
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
