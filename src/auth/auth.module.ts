import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
 

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    UsersModule,
    JwtModule.register({
        secret: "SECRET",
        signOptions: {
            expiresIn: '24h'
        }
    })
  ],
})
export class AuthModule {}