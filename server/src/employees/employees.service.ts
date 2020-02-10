import {ForbiddenException, Injectable, Logger, NotFoundException} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {EmployeeDto} from './schema/employee.dto';
const logger = new Logger();
import {isNumber} from '../functions';

@Injectable()
export class EmployeesService {

    constructor(@InjectModel('Employee') private readonly employeeModel: Model<any>) {}

    async addMedecin(datas: any): Promise<EmployeeDto  | ForbiddenException> {
        try {
            datas.status = 1;
            datas.photo = 'medecin';
            return await this.employeeModel.create(datas);
        } catch (e) {
            return new ForbiddenException(e);
        }

    }

    async addAcc(datas: any): Promise<EmployeeDto | ForbiddenException> {
        try {
            datas.status = 2;
            datas.photo = 'acc';
            return await this.employeeModel.create(datas);
        } catch (e) {
            return new ForbiddenException(e);
        }

    }


    async getEmployee(id: string): Promise<EmployeeDto[] | NotFoundException> {
        try {
            return await this.employeeModel.findById(id);
        } catch (e) {
            return new NotFoundException(e);
        }
    }


    async getEmployees(value: string): Promise<object | NotFoundException> {
            try {
                if (isNumber(value)) {
                    return await this.employeeModel.find({cps: value});
                } else {
                    return await this.employeeModel.find({name: value});
                }
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
