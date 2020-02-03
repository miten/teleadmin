import {Injectable, Logger} from '@nestjs/common';
import {employees} from './../fakedatas';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {EmployeeDto} from './schema/employee.dto';
const logger = new Logger();

@Injectable()
export class EmployeesService {

    constructor(@InjectModel('Medecin') private readonly medecinModel: Model<any>) {}

    async addEmployee(datas: any): Promise<EmployeeDto> {
        const medecin = new this.medecinModel(datas);
        return medecin.save();
    }

    async getEmployees(type: string, value: string): Promise<EmployeeDto[] | object> {
      /*  switch (type) {
            case 'name':
                return this.medecinModel.find({name: value}).exec();
            case 'secu':
                return this.medecinModel.find({secu: value}).exec();
            default:
                return this.medecinModel.find().exec();
        }*/

      return employees.find(employee => employee[type] === Number(value));
    }

    async getEmployeeById(id: string): Promise<EmployeeDto[] | object> {
        // return this.medecinModel.findById(id).exec();
        return employees.find(employee => employee._id === id);
    }
}
