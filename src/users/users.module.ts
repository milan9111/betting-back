import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesModule } from 'src/roles/roles.module';
import { User, UserSchema } from './schemas/users.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    RolesModule,
  ],
  exports: [UsersService]
})
export class UsersModule {}