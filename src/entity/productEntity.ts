import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import CartEntity from "./cartEntity";

@Entity('products')
export default class ProductEntity {

    @PrimaryGeneratedColumn({ name: 'productId' })
    productId: number;

    @Column()
    productName: string;

    @Column()
    primaryPic: string;

    @Column()
    pic1: string;

    @Column()
    pic2: string;

    @Column()
    pic3: string;

    @Column()
    pic4: string;

    @Column()
    pic5: string;

    @Column()
    price: number;

    @Column()
    quantity: number;
    
    @OneToOne(()=> CartEntity , (cart) => cart.products)
    @JoinColumn({ name: 'productId' })
    carts: CartEntity;
}