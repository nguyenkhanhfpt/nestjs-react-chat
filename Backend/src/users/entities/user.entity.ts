import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    email: string;

    @Column({name: 'username', length: 50, unique: true})
    userName: string;

    @Column()
    avatar: string;

    @Column({nullable: true})
    bio: string;

    @Column()
    password: string;

    @Column({name: 'refresh_token', nullable: true})
    refreshToken: string;
}
