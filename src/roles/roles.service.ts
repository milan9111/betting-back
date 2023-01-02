import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role, RoleDocument } from './schemas/roles.schema';

@Injectable()
export class RolesService {

    constructor(
        @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
      ) {}

    async createRole(roleDto: CreateRoleDto): Promise<Role> {
        const role = await this.roleModel.create(roleDto);
        return role;
    }

    async getRoleByValue(value: string): Promise<Role> {
        const role = await this.roleModel.findOne({ value: value }).exec();
        return role; 
    }


}
