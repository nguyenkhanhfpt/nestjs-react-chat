import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Convention } from 'src/conventions/entities/conventions.entity';
import { Message } from 'src/messages/entities/messages.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Convention, Message])],
  providers: [ChatsService],
  controllers: [ChatsController]
})
export class ChatsModule {}
