import FavoriteEntity from "../entity/favoriteEntity";
import FavoriteResponseDto from "../dto/response/favoriteResponseDto";
import { FavoritesAddRequestDto } from "../dto/request/favoriteRequestDto";


export default class FavoriteMapper {

    public static lookupMap(favorites: FavoriteEntity[]): FavoriteResponseDto[] {
        let favoriteProducts : FavoriteResponseDto[] = [];
        favorites.forEach((d: any)=>{
            favoriteProducts.push({
                favoriteId: d?.favoriteId,
                userId: d?.userId,
                userName: d?.usersFav?.userName,
                productId: d?.productId,
                productName: d?.productsFav?.productName,
                quantity: d?.productsFav?.quantity,
                price: d?.productsFav?.price,
                primaryPic: d?.productsFav?.primaryPic,
                productImages: [d?.productsFav?.pic1 , d?.productsFav?.pic2 , d?.productsFav?.pic3 , d?.productsFav?.pic4 , d?.productsFav?.pic5]?.filter(e=> e !== null && e !== undefined )
            })
        })
        return favoriteProducts;
    }

    public static addFavoriteMapper(request: FavoritesAddRequestDto) : FavoriteEntity {
        let favorites = new FavoriteEntity();

        favorites.userId = request?.userId;
        favorites.productId = request?.productId;

        return favorites;
    }
}