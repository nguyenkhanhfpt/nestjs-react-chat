
import { User } from "src/users/entities/user.entity";

export class CreateConventionDto {
    user: User;
    name?: string;
    isGroup?: boolean;
    receiverId: string|number;
}