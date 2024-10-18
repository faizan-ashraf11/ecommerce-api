import AppDataSource from "../config/dataSourceConfig";
import ProductEntity from "../entity/productEntity";

export const ProductRepository = AppDataSource.getRepository(ProductEntity).extend({


    async getAllProducts(productId?: number): Promise<any[]>{
        const productLookup = await this.createQueryBuilder('products')
        .where(':productId IS NULL OR products.productId = :productId' , { productId })
        .getMany();
        return productLookup;
    }

})