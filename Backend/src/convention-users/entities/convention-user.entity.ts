import { Convention } from "src/conventions/entities/conventions.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'convention_users'})
export class ConventionUser {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Convention, convention => convention.userConventions)
    @JoinColumn({name: 'convention_id'})
    convention: Convention;

    @ManyToOne(() => User, user => user.userConventions)
    @JoinColumn({name: 'user_id'})
    user: User;
}
