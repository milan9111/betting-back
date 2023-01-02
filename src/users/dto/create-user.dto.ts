import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: "example@example.com" })
  @IsString({message: 'Must be string'})
  @IsEmail({}, {message: 'Invalid email'})
  readonly email: string;
  @ApiProperty({ example: "12345678" })
  @IsString({message: 'Must be string'})
  @Length(8, 16, {message: 'Not less than 8 and not more than 16'})
  readonly password: string;
}