import { AddProductRequestDto } from './../dto/request/productRequestDto';
import ProductResponseDto from "../dto/response/productResponseDto";
import Response from "../common/responce/Responce";
import { ProductRepository } from "../repository/productRepository";
import ProductMapper from "../mapper/productMapper";
import ProductEntity from '../entity/productEntity';
import { EntityManager } from 'typeorm';
import { CREATED } from '../common/responce/StatusCode';

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

}