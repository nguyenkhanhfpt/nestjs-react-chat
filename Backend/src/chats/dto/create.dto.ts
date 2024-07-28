import { IsNotEmpty } from "class-validator";
import { TypeEnum } from "src/messages/entities/messages.entity";

export class CreateChatDto {
    @IsNotEmpty()
    userId: string;

    @IsNotEmpty()
    content: string;

    type?: TypeEnum;
    
    conventionId: string|null;
    
    @IsNotEmpty()
    receiverId: string;
}