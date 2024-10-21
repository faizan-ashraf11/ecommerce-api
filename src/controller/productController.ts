import ProductRequestDto, { AddProductRequestDto, ProductDeleteRequestDto, UpdateProductRequestDto } from "../dto/request/productRequestDto";
import Response from "../common/responce/Responce";
import { StatusCodes } from "http-status-codes";
import { Body, Delete, Get, HttpCode, JsonController, Post, Put, QueryParams } from "routing-controllers";
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

    @OpenAPI({
        summary: 'Remove Product',
        description: 'Remove Product by productId'
    })
    @HttpCode(StatusCodes.OK)
    @Delete()
    async removeProduct(@QueryParams() query: ProductDeleteRequestDto) : Promise<Response<any>> {
        return await this.productService.removeProduct(
            query.productId
        );
    }

    @OpenAPI({
        summary: 'Update Product',
        description: 'Update Products Data by Product Id'
    })
    @HttpCode(StatusCodes.OK)
    @Put('/product')
    async updateProduct(@Body({ validate: true }) request: UpdateProductRequestDto) : Promise<Response<any>>{
        return await this.productService.updateProduct(request.productId, request);
    }
}