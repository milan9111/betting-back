import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message, MessageDocument } from './schemas/message.schema';
 

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async getAll(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }

  async create(messageDto: CreateMessageDto): Promise<Message> {
    const newMessage = new this.messageModel(messageDto);
    return newMessage.save();
  }
}