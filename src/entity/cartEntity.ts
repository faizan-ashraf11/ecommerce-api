import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import ProductEntity from "./productEntity";
import UserEntity from "./userEntity";

@Entity('cart')
export default class CartEntity {

    @PrimaryGeneratedColumn({ name: 'cartId' })
    cartId: number;

    @Column()
    productId: number;

    @Column()
    userId: number;

    @OneToOne(()=> ProductEntity , (product) => product.carts )
    @JoinColumn({ name: 'productId' })
    products: ProductEntity;

    @OneToOne(()=> UserEntity , (product) => product.carts )
    @JoinColumn({ name: 'userId' })
    users: UserEntity;
}