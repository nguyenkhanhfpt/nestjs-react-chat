import { IsEmail, IsString } from "class-validator";

export class SignUpDto {
    @IsEmail()
    email: string;

    @IsString()
    username: string;

    bio?: string;

    @IsString()
    password: string;
}