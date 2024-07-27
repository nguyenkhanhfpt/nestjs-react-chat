import { Module } from '@nestjs/common';
import { ConventionUsersService } from './convention-users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConventionUser } from './entities/convention-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConventionUser])],
  providers: [ConventionUsersService],
})
export class ConventionUsersModule {}
