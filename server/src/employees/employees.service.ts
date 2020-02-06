import {Injectable, Logger, NotFoundException} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {EmployeeDto} from './schema/employee.dto';
const logger = new Logger();

@Injectable()
export class EmployeesService {

    constructor(@InjectModel('Employee') private readonly employeeModel: Model<any>) {}

    async addMedecin(datas: any): Promise<EmployeeDto> {
        datas.status = 1;
        datas.photo = 'medecin';
        const medecin = new this.employeeModel(datas);
        return medecin.save();
    }

    async addAcc(datas: any): Promise<EmployeeDto> {
        datas.status = 2;
        datas.photo = 'acc';
        const acc = new this.employeeModel(datas);
        return acc.save();
    }


    async getEmployee(id: string): Promise<EmployeeDto[] | NotFoundException | any> {
        try {
            const employee = await this.employeeModel.findById(id);
            return employee;
        } catch (e) {
            return new NotFoundException(e);
        }
    }



    async getEmployees(type: string, value: string): Promise<object | NotFoundException> {
        try {
            const user = await this.employeeModel.where(type, value);
            return user;
        } catch (e) {
            return new NotFoundException(e);
        }
    }


    async modifyEmployee(id: string, data: object): Promise<EmployeeDto[] | NotFoundException | any> {
        try {
            const user = await this.employeeModel.findById(id);
            await user.updateOne(data);
            await user.save();
            return await this.employeeModel.findById(id);
        } catch (e) {
            return new NotFoundException(e);
        }
    }

    // Specific function for auth

    async getEmployeeByCps(codeCps: string): Promise<EmployeeDto[] | NotFoundException | any> {
        try {
            return await this.employeeModel.findOne({cps: codeCps});
        } catch (e) {
            return new NotFoundException(e);
        }
    }

}
