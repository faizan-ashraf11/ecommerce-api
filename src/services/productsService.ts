import { AddProductRequestDto } from './../dto/request/productRequestDto';
import ProductResponseDto from "../dto/response/productResponseDto";
import Response from "../common/responce/Responce";
import { ProductRepository } from "../repository/productRepository";
import ProductMapper from "../mapper/productMapper";
import ProductEntity from '../entity/productEntity';
import { EntityManager } from 'typeorm';
import { CREATED, Product_Not_Found, Product_REMOVED, Product_Updated } from '../common/responce/StatusCode';

export default class ProductService {
    private productRepo = ProductRepository

    async getProducts(productId?: number) : Promise<Response<ProductResponseDto>>{
        let data : any[] = await this.productRepo.getAllProducts(productId);
        let mappedData: any[] = ProductMapper.lookupMapper(data);
        return new Response<any>(mappedData);
    }

    async addProducts(request: AddProductRequestDto) : Promise<Response<any>>{
        let product : ProductEntity;

        await this.productRepo.manager.transaction(async (entityManager: EntityManager) => {
            product = ProductMapper.addProductMapper(request);
            product = await entityManager.save(product);
        })

        return new Response<any>(CREATED);
    }

    async removeProduct(productId: number) : Promise<Response<any>>{
        let product : ProductEntity;

        await this.productRepo.manager.transaction(async (entityManager: EntityManager) => {
            product = await this.productRepo.getProductByProductId(productId);
            product = await entityManager.remove(product);
        })

        return new Response<any>(Product_REMOVED);
    }

    async updateProduct(productId: number , request: AddProductRequestDto) : Promise<Response<any>>{
        let product : ProductEntity;

        await this.productRepo.manager.transaction(async (entityManager: EntityManager) => {
            product = await this.productRepo.getProductByProductId(productId);
            console.log('product' , !product);
            if(!product){
                return ;
            }
            product.productName = product?.productName || '';
            product.quantity = product?.quantity || 0;
            product.price = product?.price || 0;
            product.primaryPic = product?.primaryPic || '';
            product.pic1 = request?.pic1 || '';
            product.pic2 = request?.pic2 || '';
            product.pic3 = request?.pic3 || '';
            product.pic4 = request?.pic4 || '';
            product.pic5 = request?.pic5 || '';
            product = await entityManager.save(product);
        })
        if(!product){
            return new Response<any>(Product_Not_Found);
        }
        return new Response<any>(Product_Updated);
    }

}