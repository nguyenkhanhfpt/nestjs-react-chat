import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { responseError } from 'src/common/exceptions/api.exception';
import { CreateConventionDto } from 'src/conventions/dto/create.dto';
import { Convention } from 'src/conventions/entities/conventions.entity';
import { CreateMessageDto } from 'src/messages/dto/create.dto';
import { Message } from 'src/messages/entities/messages.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateChatDto } from './dto/create.dto';

@Injectable()
export class ChatsService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        @InjectRepository(Convention) private conventionsRepository: Repository<Convention>,
        @InjectRepository(Message) private messagesRepository: Repository<Message>
      ) {
      }
    
      async createConvention(createConventionDto: CreateConventionDto) {
        console.log(createConventionDto);
      }
    
      async sendMessage(user: User, convention: Convention, createMessageDto: CreateMessageDto) {
    
      }
    
      async createChat(createChatDto: CreateChatDto) {
        let user = await this.usersRepository.findOneBy({
          id: createChatDto.userId,
        });
    
        if (!user) {
          return responseError(400);
        }

        return user;
    
    
        // if not convention id -> create -> add user to convention_users
    
        // for find convention if exist convention id
    
        // create message
    
      }
}
