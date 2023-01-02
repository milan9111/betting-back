import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

import { MatchesModule } from './matches/matches.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MatchesModule,
    MongooseModule.forRoot(
      `mongodb+srv://milan9111work:12345678Aa@cluster0.a6wppdg.mongodb.net/?retryWrites=true&w=majority`,
    ),
    UsersModule,
    RolesModule,
    AuthModule,
  ],
})
export class AppModule {}
