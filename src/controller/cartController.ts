import Response from "../common/responce/Responce";
import CartRequestDto, { CartAddRequestDto, CartDeleteResquestDto } from "../dto/request/cartRequestDto";
import { StatusCodes } from "http-status-codes";
import { Body, Delete, Get, HttpCode, JsonController, Post, QueryParams } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import CartService from "../services/cartService";

@JsonController('/cart')
export class CartController {

    private cartService = new CartService();
    @OpenAPI({
        summary: 'Get Cart',
        description: 'Get All Required Cart Products'
    })
    @HttpCode(StatusCodes.OK)
    @Get('/cart-master')
    async getCarts(@QueryParams() query : CartRequestDto) : Promise<Response<any>>{
        return await this.cartService.getCarts(
            query.userId
        );
    }
    
    @OpenAPI({
        summary: 'Add Cart',
        description: 'Add Products to Cart'
    })
    @HttpCode(StatusCodes.OK)
    @Post('/add')
    async addCarts(@Body({ validate: true }) request: CartAddRequestDto) : Promise<Response<any>>{
        return await this.cartService.addToCart(
            request
        );
    }

    @OpenAPI({
        summary: 'Remove Cart',
        description: 'Remove Product from Cart'
    })
    @HttpCode(StatusCodes.OK)
    @Delete()
    async removeProduct(@QueryParams() query: CartDeleteResquestDto) : Promise<Response<any>> {
        return await this.cartService.removeProductFromCart(
            query.productId,
            query.userId
        );
    }

}