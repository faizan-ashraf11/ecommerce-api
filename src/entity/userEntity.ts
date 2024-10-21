import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import CartEntity from "./cartEntity";

@Entity('users')
export default class UserEntity {

    @PrimaryGeneratedColumn({ name: 'userId' })
    userId: number;

    @Column()
    userName: string;

    @Column()
    userPic: string;

    @Column()
    login: string;

    @Column()
    password: string;

    @OneToOne(()=> CartEntity , (user) => user.users )
    @JoinColumn({ name: 'userId' })
    carts: CartEntity;
}