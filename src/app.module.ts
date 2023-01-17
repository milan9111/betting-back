import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { ConfigModule } from '@nestjs/config';
import { MatchesModule } from './matches/matches.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MatchesModule,
    MongooseModule.forRoot(
      `mongodb+srv://milan9111work:12345678Aa@cluster0.a6wppdg.mongodb.net/?retryWrites=true&w=majority`,
    ),
    //mongodb+srv://milan9111:<password>@cluster0.sb4lg88.mongodb.net/?retryWrites=true&w=majority
    UsersModule,
    RolesModule,
    AuthModule,
    ChatModule,
    EventsModule,
  ],
})
export class AppModule {}
