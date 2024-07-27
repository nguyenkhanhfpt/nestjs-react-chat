import { Convention } from "src/conventions/entities/conventions.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum TypeEnum {
    TEXT = 1,
    VIDEO = 2
};

@Entity({name: 'messages'})
export class Message {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({name: 'content', type: 'text'})
    content: string;

    @Column({type: 'enum', enum: TypeEnum, default: TypeEnum.TEXT})
    type: TypeEnum;

    @Column({name: 'created_at'})
    createdAt: Date;

    @ManyToOne(() => Convention, convention => convention.messages, {
        onDelete: "CASCADE",
    })
    @JoinColumn({name: 'convention_id'})
    convention: Convention;

    @ManyToOne(() => User, user => user.messages, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'sender_id'})
    sender: User;
}