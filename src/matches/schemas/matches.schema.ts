import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type MatchDocument = Match & Document;

@Schema()
export class Match {
  @ApiProperty({ example: 1 })
  @Prop()
  odds_id: number;
  @ApiProperty({ example: 1 })
  @Prop()
  eth_index: number;
  @ApiProperty({ example: 'AC Milan' })
  @Prop()
  home_team: string;
  @ApiProperty({ example: 'FC Inter' })
  @Prop()
  away_team: string;
  @ApiProperty({ example: '2022-12-01' })
  @Prop()
  event_date: string;
  @ApiProperty({ example: '21:45' })
  @Prop()
  event_time: string;
  @ApiProperty({ example: '23:45' })
  @Prop()
  final_time: null | string;
  @ApiProperty({ example: '1 - 0' })
  @Prop()
  final_result: null | string;
  @ApiProperty({ example: '' })
  @Prop()
  penalties_result: string;
  @ApiProperty({ example: 1 })
  @Prop()
  team_winner: number;
  @ApiProperty({ example: true })
  @Prop()
  finished: boolean;
  @ApiProperty({ example: 1.5 })
  @Prop()
  odd_1: number;
  @ApiProperty({ example: 3.5 })
  @Prop()
  odd_x: number;
  @ApiProperty({ example: 2.0 })
  @Prop()
  odd_2: number;
  @ApiProperty({ example: '0x1234a5677b76543d435' })
  @Prop()
  creator: string;
  @ApiProperty({ example: '0.003' })
  @Prop()
  creator_bonus: null | string;
  @ApiProperty({
    example: [
      '0x1234a5677b76543d435',
      '0x1234a5677b76543d435',
      '0x1234a5677b76543d435',
    ],
  })
  @Prop([String])
  winners: null | string[];
}

export const MatchSchema = SchemaFactory.createForClass(Match);
