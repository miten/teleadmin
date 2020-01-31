import { Injectable } from '@nestjs/common';
import {employees} from './../fakedatas';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {EmployeeDto} from './schema/employee.dto';


@Injectable()
export class EmployeesService {

    constructor(@InjectModel('Medecin') private readonly medecinModel: Model<any>) {}

    async create(createCatDto: any): Promise<EmployeeDto> {
        const createdCat = new this.medecinModel(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<EmployeeDto[]> {
        return this.medecinModel.find().exec();
    }


    getSessionId(): number {
        return 23434343434;
    }

    getEmployeeInfos(params) {
        return employees.find(x => x.code == params);
    }
}
