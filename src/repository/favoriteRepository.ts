import AppDataSource from "../config/dataSourceConfig";
import FavoriteEntity from "../entity/favoriteEntity";

export const FavoritesRepository = AppDataSource.getRepository(FavoriteEntity).extend({

    async getFavoritesProductsByUserId(userId: number): Promise<FavoriteEntity[]> {
        return await this.createQueryBuilder('favorites')
        .leftJoinAndSelect('favorites.productsFav', 'productsFav')
        .leftJoinAndSelect('favorites.usersFav', 'usersFav')
        .where(':userId IS NULL OR favorites.userId = :userId' , {userId})
        .getMany();
    },

    async getFavoritesby_UserId_ProductId(userId: number , productId: number) : Promise<FavoriteEntity> {
        return await this.createQueryBuilder('favorites')
        .where('favorites.userId = :userId' , {userId})
        .andWhere('favorites.productId = :productId' , { productId })
        .getOne();
    }
});