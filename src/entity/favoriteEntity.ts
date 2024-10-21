import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('cart')
export default class CartEntity {

    @PrimaryGeneratedColumn({ name: 'favoriteId' })
    favoriteId: number;

    @Column()
    productId: number;

    @Column()
    userId: number;

}