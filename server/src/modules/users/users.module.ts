import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from '@/modules/users/users.controler';
import { UsersService } from '@/modules/users/users.service';
import { AuthModule } from '@/modules/auth/auth.module';
import { LoggerModule } from '@/shared/modules/logger/logger.module';
import { UserRepository } from '@/modules/users/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    AuthModule,
    LoggerModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
