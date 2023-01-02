import { ApiProperty } from '@nestjs/swagger';

export class UpdateMatchDto {
  @ApiProperty({ example: '23:45' })
  readonly final_time: string;
  @ApiProperty({ example: '1 - 0' })
  readonly final_result: string;
  @ApiProperty({ example: '' })
  readonly penalties_result: string;
  @ApiProperty({example: 1})
  readonly team_winner: number;
  @ApiProperty({ example: true })
  readonly finished: boolean;
  @ApiProperty({ example: '0.003' })
  readonly creator_bonus: string;
  @ApiProperty({
    example: [
      '0x12345d5456x425d3245',
      '0x123345c5542x3245',
      '0x123325x6544x3346',
    ],
  })
  readonly winners: string[];
}
