import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";
import UserEntity from "./userEntity";
import ProductEntity from "./productEntity";

@Entity('favorites')
export default class FavoriteEntity {

    @PrimaryGeneratedColumn({ name: 'favoriteId' })
    favoriteId: number;

    @Column()
    productId: number;

    @Column()
    userId: number;

    @OneToOne(()=> ProductEntity , (product) => product.favPro )
    @JoinColumn({ name: 'productId' })
    productsFav: ProductEntity;

    @OneToOne(()=> UserEntity , (product) => product.favPro )
    @JoinColumn({ name: 'userId' })
    usersFav: UserEntity;

}
