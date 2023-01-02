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
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { MatchesService } from './matches.service';
import { Match } from './schemas/matches.schema';

@ApiTags('Matches')
@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @ApiOperation({summary: "Get all matches"})
  @ApiResponse({status: 200, type: [Match]})
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(): Promise<Match[]> {
    return this.matchesService.getAll();
  }

  @ApiOperation({summary: "Get one match"})
  @ApiResponse({status: 200, type: Match})
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id') id: string): Promise<Match> {
    return this.matchesService.getById(id);
  }

  @ApiOperation({summary: "Create match"})
  @ApiResponse({status: 201, type: Match})
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createMatchDto: CreateMatchDto): Promise<Match> {
    return this.matchesService.create(createMatchDto);
  }

  @ApiOperation({summary: "Updated match"})
  @ApiResponse({status: 200, type: Match})
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Body() updateMatchDto: UpdateMatchDto,
    @Param('id') id: string,
  ): Promise<Match> {
    return this.matchesService.update(id, updateMatchDto);
  }
}
