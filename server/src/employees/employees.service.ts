import { Injectable } from '@nestjs/common';
import {employees} from './../fakedatas';


@Injectable()
export class EmployeesService {

    getSessionId(): number {
        return 23434343434;
    }

    getEmployeeInfos(params) {
        return employees.find(x => x.code == params);
    }
}
