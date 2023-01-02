import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { Match, MatchDocument } from './schemas/matches.schema';

@Injectable()
export class MatchesService {
  constructor(
    @InjectModel(Match.name) private matchModel: Model<MatchDocument>,
  ) {}

  async getAll(): Promise<Match[]> {
    return this.matchModel.find().exec();
  }

  async getById(id: string): Promise<Match> {
    return this.matchModel.findById(id);
  }

  async create(matchDto: CreateMatchDto): Promise<Match> {
    const newMatch = new this.matchModel(matchDto);
    return newMatch.save();
  }

  async update(id: string, matchDto: UpdateMatchDto): Promise<Match> {
    return this.matchModel.findByIdAndUpdate(id, matchDto, {new: true});
  } 
}
