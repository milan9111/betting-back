import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ValidationPipe } from "src/pipes/validation.pipe";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { AuthService } from "./auth.service";


@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/login')
    @UsePipes(ValidationPipe)
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    @Post('/registration')
    @UsePipes(ValidationPipe)
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto);
    }
}