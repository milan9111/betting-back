import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { Role } from './schemas/roles.schema';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {

    constructor(private readonly rolesService: RolesService) {}

    @ApiOperation({summary: "Create role"})
    @ApiResponse({status: 201, type: Role})
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() roleDto: CreateRoleDto): Promise<Role> {
        return this.rolesService.createRole(roleDto);
    }

    @ApiOperation({summary: "Get one role"})
    @ApiResponse({status: 200, type: Role})
    @Get('/:value')
    @HttpCode(HttpStatus.OK)
    getByValue(@Param('value') value: string): Promise<Role> {
        return this.rolesService.getRoleByValue(value);
    }

}
