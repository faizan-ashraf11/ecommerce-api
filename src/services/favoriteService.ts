import Response from "../common/responce/Responce";
import { CREATED, Favorite_REMOVED, Not_Found } from "../common/responce/StatusCode";
import { EntityManager } from "typeorm";
import { FavoritesRepository } from "../repository/favoriteRepository";
import FavoriteMapper from "../mapper/favoriteMapper";
import FavoriteEntity from "../entity/favoriteEntity";
import FavoriteResponseDto from "../dto/response/favoriteResponseDto";

export default class FavoriteService {

    private favRepo = FavoritesRepository;

    async getFavorites(userId: number) : Promise<Response<FavoriteResponseDto>>{
        let data : FavoriteEntity[] = await this.favRepo.getFavoritesProductsByUserId(userId);
        let mappedData = await FavoriteMapper.lookupMap(data);
        return new Response<any>(mappedData);
    }

    async addToFavorites(request: any) : Promise<Response<any>>{
        let favorite : FavoriteEntity;

        await this.favRepo.manager.transaction(async (entityManager: EntityManager) => {
            favorite = FavoriteMapper.addFavoriteMapper(request);
            favorite = await entityManager.save(favorite);
        })

        return new Response<any>(CREATED);
    }

    async removeProductFromFavorites(productId: number , userId: number) : Promise<Response<any>>{
        let favorite : FavoriteEntity;

        await this.favRepo.manager.transaction(async (entityManager: EntityManager) => {
            favorite = await this.favRepo.getFavoritesby_UserId_ProductId(userId , productId);
            if(!favorite) {
                return;
            }
            favorite = await entityManager.remove(favorite);
        })

        if(!favorite){
            return new Response<any>(Not_Found);
        }
        return new Response<any>(Favorite_REMOVED);
    }

}