import { Module } from '@nestjs/common';
import { ConventionsService } from './conventions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Convention } from './entities/conventions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Convention])],
  providers: [ConventionsService]
})
export class ConventionsModule {}
