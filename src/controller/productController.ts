import ProductRequestDto, { AddProductRequestDto } from "../dto/request/productRequestDto";
import Response from "../common/responce/Responce";
import { StatusCodes } from "http-status-codes";
import { Body, Get, HttpCode, JsonController, Post, QueryParams } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import ProductService from "../services/productsService";

@JsonController('/product')
export class ProductController {

    private productService = new ProductService();

    @OpenAPI({
        summary: 'Get products',
        description: 'Get All Required Products'
    })
    @HttpCode(StatusCodes.OK)
    @Get('/product-master')
    async getProducts(@QueryParams() query : ProductRequestDto) : Promise<Response<any>>{
        return await this.productService.getProducts(
            query.productId
        );
    }

    @OpenAPI({
        summary: 'Add Product',
        description: 'Add Product'
    })
    @HttpCode(StatusCodes.OK)
    @Post('/product')
    async addProduct(@Body({ validate: true }) request: AddProductRequestDto) : Promise<Response<any>>{
        return await this.productService.addProducts(request);
    }
}