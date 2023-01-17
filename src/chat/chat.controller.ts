import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ChatService } from './chat.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './schemas/message.schema';

@ApiTags('Chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @ApiOperation({ summary: 'Get all messages' })
  @ApiResponse({ status: 200, type: [Message] })
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(): Promise<Message[]> {
    return this.chatService.getAll();
  }

  @ApiOperation({ summary: 'Create message' })
  @ApiResponse({ status: 201, type: [Message] })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return this.chatService.create(createMessageDto);
  }
}
