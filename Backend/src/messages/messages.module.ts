import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/messages.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [MessagesService]
})
export class MessagesModule {}