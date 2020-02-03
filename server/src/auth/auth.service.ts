import { ForbiddenException, Injectable, forwardRef, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmployeesService } from './../employees/employees.service';
import { Logger } from '@nestjs/common';
const logger = new Logger();

@Injectable()
export class AuthService {
  constructor(private readonly userService: EmployeesService, private readonly jwtService: JwtService) {}

  async validateUser(code: string, password: string): Promise<any> {
    const user = await this.userService.getEmployees('code', code);
    if (user && user['password'] === password) {
      return user;
    }
    return null;
  }

  async login(userx: any) {
    const user = await this.validateUser(userx.username, userx.password);
    if (user) {
      const payload = { username: user.name, _id: user._id, status: user.status };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    return new ForbiddenException('Cannot generate token');
  }
}
