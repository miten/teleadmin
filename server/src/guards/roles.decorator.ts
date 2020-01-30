import { SetMetadata, ReflectMetadata } from '@nestjs/common';

export const Roles = (...roles: number[]) => SetMetadata('roles', roles);
