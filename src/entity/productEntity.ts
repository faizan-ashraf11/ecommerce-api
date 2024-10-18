import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    
}