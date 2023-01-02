import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  @ApiProperty({ example: "ADMIN" })
  @Prop()
  value: string;
  @ApiProperty({ example: "User role value" })
  @Prop()
  description: string;  
}

export const RoleSchema = SchemaFactory.createForClass(Role);