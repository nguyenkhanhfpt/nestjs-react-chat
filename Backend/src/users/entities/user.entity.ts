import { Message } from "src/messages/entities/messages.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    email: string;

    @Column({name: 'username', length: 50, unique: true})
    username: string;

    @Column()
    avatar: string;

    @Column({nullable: true})
    bio: string;

    @Column()
    password: string;

    @Column({name: 'refresh_token', nullable: true})
    refreshToken: string;

    @OneToMany(() => Message, message => message.sender)
    messages: Message[];
}
