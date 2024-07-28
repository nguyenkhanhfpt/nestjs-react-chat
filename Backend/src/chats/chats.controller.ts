import { Controller, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateChatDto } from './dto/create.dto';
import { ChatsService } from './chats.service';

@Controller('chats')
export class ChatsController {
    constructor(
        private chatService: ChatsService
    ) {}
    
    @Post('send-message')
    @UsePipes(new ValidationPipe({transform: true, whitelist: true}))
    async sendMessage(@Req() createChatDto: CreateChatDto) {
        return await this.chatService.createChat(createChatDto);
    }
}
