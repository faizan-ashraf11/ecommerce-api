import CartResponseDto from "../dto/response/cartResponseDto";
import AppDataSource from "../config/dataSourceConfig";
import CartEntity from "../entity/cartEntity";

export const CartRepository = AppDataSource.getRepository(CartEntity).extend({

    async getCartProductsByUserId(userId: number): Promise<CartEntity[]> {
        return await this.createQueryBuilder('cart')
        .leftJoinAndSelect('cart.products', 'products')
        .leftJoinAndSelect('cart.users', 'users')
        .where(':userId IS NULL OR cart.userId = :userId' , {userId})
        .getMany();
    },

    async getCartby_UserId_ProductId(userId: number , productId: number) : Promise<CartEntity> {
        return await this.createQueryBuilder('cart')
        .where('cart.userId = :userId' , {userId})
        .andWhere('cart.productId = :productId' , { productId })
        .getOne();
    }
});