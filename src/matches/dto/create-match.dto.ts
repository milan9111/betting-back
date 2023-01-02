import { ApiProperty } from '@nestjs/swagger';

export class CreateMatchDto {
  @ApiProperty({ example: 1 })
  readonly odds_id: number;
  @ApiProperty({ example: 1 })
  readonly eth_index: number;
  @ApiProperty({ example: 'AC Milan' })
  readonly home_team: string;
  @ApiProperty({ example: 'FC Inter' })
  readonly away_team: string;
  @ApiProperty({ example: '2022-12-01' })
  readonly event_date: string;
  @ApiProperty({ example: '21:45' })
  readonly event_time: string;
  @ApiProperty({ example: false })
  readonly finished: boolean;
  @ApiProperty({ example: 1.5 })
  readonly odd_1: number;
  @ApiProperty({ example: 2 })
  readonly odd_x: number;
  @ApiProperty({ example: 2.5 })
  readonly odd_2: number;
  @ApiProperty({ example: '0x12345d5456x425d3245' })
  readonly creator: string;
}
