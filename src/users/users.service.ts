import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/users.schema';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private roleService: RolesService
      ) {}


    async createUser(userDto: CreateUserDto): Promise<User> {
      const role = await this.roleService.getRoleByValue("USER");
      const newUser = new this.userModel({...userDto, role: role.value, _id: new Types.ObjectId()});
      return newUser.save();
    }

    async getAllUser(): Promise<User[]> {
      const users = await this.userModel.find().exec();
      return users;
    }

    async getUserByEmail(email: string) {
      const user = await this.userModel.findOne({ email: email }).exec();
      return user;
    }

}