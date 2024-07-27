import { ConventionUser } from "src/convention-users/entities/convention-user.entity";
import { Message } from "src/messages/entities/messages.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'conventions'})
export class Convention {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name', nullable: true})
    name: string;

    @Column({name: 'is_group', default: false})
    isGroup: boolean;

    @Column({name: 'created_at'})
    createdAt: Date;

    @OneToMany(() => Message, message => message.convention)
    messages: Message[];

    @OneToMany(() => ConventionUser, conventionUser => conventionUser.convention)
    userConventions: ConventionUser;
}