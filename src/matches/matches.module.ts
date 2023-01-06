import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsGateway } from 'src/events/events.gateway';
import { MatchesController } from './matches.controller';
import { MatchesService } from './matches.service';
import { Match, MatchSchema } from './schemas/matches.schema';

@Module({
  providers: [MatchesService, EventsGateway],
  controllers: [MatchesController],
  imports: [
    MongooseModule.forFeature([{ name: Match.name, schema: MatchSchema }]),
  ],
})
export class MatchesModule {}
