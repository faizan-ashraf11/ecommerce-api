import Response from "../common/responce/Responce";
import { StatusCodes } from "http-status-codes";
import { Body, Delete, Get, HttpCode, JsonController, Post, QueryParams } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import FavoritesRequestDto, { FavoritesAddRequestDto, FavoritesDeleteResquestDto } from "../dto/request/favoriteRequestDto";
import FavoriteService from "../services/favoriteService";

@JsonController('/favorite')
export class FavoriteController {

    private favService = new FavoriteService();
    @OpenAPI({
        summary: 'Get Favorites',
        description: 'Get All Required Favorite Products'
    })
    @HttpCode(StatusCodes.OK)
    @Get('/favorite-master')
    async getFavorites(@QueryParams() query : FavoritesRequestDto) : Promise<Response<any>>{
        return await this.favService.getFavorites(
            query.userId
        );
    }
    
    @OpenAPI({
        summary: 'Add Favorites',
        description: 'Add Products to Favorites'
    })
    @HttpCode(StatusCodes.OK)
    @Post('/add')
    async addFavorites(@Body({ validate: true }) request: FavoritesAddRequestDto) : Promise<Response<any>>{
        return await this.favService.addToFavorites(
            request
        );
    }

    @OpenAPI({
        summary: 'Remove Favorites',
        description: 'Remove Product from Favorites'
    })
    @HttpCode(StatusCodes.OK)
    @Delete()
    async removeProduct(@QueryParams() query: FavoritesDeleteResquestDto) : Promise<Response<any>> {
        return await this.favService.removeProductFromFavorites(
            query.productId,
            query.userId
        );
    }

}