import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty({ example: '0x00....0000' })
  readonly name: string;
  @ApiProperty({ example: 'Hello world!' })
  readonly message: string;
}
