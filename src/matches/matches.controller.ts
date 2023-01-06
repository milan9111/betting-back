import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EventsGateway } from 'src/events/events.gateway';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { MatchesService } from './matches.service';
import { Match } from './schemas/matches.schema';

@ApiTags('Matches')
@Controller('matches')
export class MatchesController {
  constructor(
    private readonly matchesService: MatchesService,
    private readonly eventsGateway: EventsGateway,
  ) {}

  @ApiOperation({ summary: 'Get all matches' })
  @ApiResponse({ status: 200, type: [Match] })
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(): Promise<Match[]> {
    return this.matchesService.getAll();
  }

  @ApiOperation({ summary: 'Get one match' })
  @ApiResponse({ status: 200, type: Match })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id') id: string): Promise<Match> {
    return this.matchesService.getById(id);
  }

  @ApiOperation({ summary: 'Create match' })
  @ApiResponse({ status: 201, type: Match })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createMatchDto: CreateMatchDto): Promise<Match> {
    this.eventsGateway.server.emit('createdMatch', {
      odds_id: createMatchDto.odds_id,
      eth_index: createMatchDto.eth_index,
      text: `Match ${createMatchDto.home_team} vs ${createMatchDto.away_team} have been created!`,
    });
    return this.matchesService.create(createMatchDto);
  }

  @ApiOperation({ summary: 'Updated match' })
  @ApiResponse({ status: 200, type: Match })
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Body() updateMatchDto: UpdateMatchDto,
    @Param('id') id: string,
  ): Promise<Match> {
    this.eventsGateway.server.emit('updatedMatch', {
      finished: updateMatchDto.finished,
      finalResult: updateMatchDto.final_result,
      updateTime: Date.now(),
      text: `Prizes have been distributed!`,
    });
    return this.matchesService.update(id, updateMatchDto);
  }
}
