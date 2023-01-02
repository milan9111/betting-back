import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/users.schema';
import { UsersService } from './users.service';
 
@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}


    @ApiOperation({summary: "Get all users"})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    @HttpCode(HttpStatus.OK)
    getAllUser(): Promise<User[]> {
      return this.usersService.getAllUser();
    }

    create(@Body() userDto: CreateUserDto): Promise<User> {
        return this.usersService.createUser(userDto);
    }     

}