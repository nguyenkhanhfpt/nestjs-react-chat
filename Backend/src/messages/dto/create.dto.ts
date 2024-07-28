import { Convention } from "src/conventions/entities/conventions.entity";
import { TypeEnum } from "../entities/messages.entity";
import { User } from "src/users/entities/user.entity";

export class CreateMessageDto {
    content: string;
    type?: TypeEnum;
    convention: Convention;
    sender: User;
}