import {ForbiddenException, Injectable, NotFoundException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmployeesService } from './../employees/employees.service';
import { Logger } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
const logger = new Logger();

@Injectable()
export class AuthService {
  constructor(private readonly employeesService: EmployeesService, private readonly jwtService: JwtService,
              @InjectModel('Login') private readonly loginModel: Model<any>) {}


  async validateUser(code: string, password: string): Promise<any> {
    try {
      const user = await this.loginModel.findOne({cps: code});
      if (user && user.password === password) {
        return user;
      }
    } catch (e) {
      return new NotFoundException(e);
    }
  }

  async getMe(id: string): Promise<any> {
    return await this.employeesService.getEmployee(id);
  }

  async login(userx: any) {
    try {
      const user = await this.validateUser(userx.username, userx.password);
      if (user) {
        const userData = await this.employeesService.getEmployee(user._id);
        if (userData) {
          const payload = {_id: user._id, status: userData['status']};
          return {access_token: this.jwtService.sign(payload)};
        }
      }
    } catch (e) {
      return new NotFoundException(e);
    }
  }

  async register(datas: any) {
    try {
      const userExist = await this.employeesService.getEmployeeByCps(datas.cps);
      if (!userExist) {
        const newUser = await this.loginModel.create(datas);
        return await this.employeesService.addMedecin({cps: newUser.cps, _id: newUser._id});
      } else {
        return new ForbiddenException();
      }
    } catch (e) {
      return new NotFoundException(e);
    }
  }

}
