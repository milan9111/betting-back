import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { Role, RoleSchema } from './schemas/roles.schema';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
  ],
  exports: [RolesService],
})
export class RolesModule {}
