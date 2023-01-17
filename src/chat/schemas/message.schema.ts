import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @ApiProperty({ example: "0x00....0000" })
  @Prop()
  name: string;
  @ApiProperty({ example: "Hello world!" })
  @Prop()
  message: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);