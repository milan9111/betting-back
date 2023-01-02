import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty({ example: "example@example.com" })
  @Prop()
  email: string;
  @ApiProperty({ example: "12345678" })
  @Prop()
  password: string;
  @ApiProperty({ example: "USER" })
  @Prop()
  role: string;  
}

export const UserSchema = SchemaFactory.createForClass(User);