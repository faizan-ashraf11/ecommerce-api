import { AddProductRequestDto } from "dto/request/productRequestDto";
import ProductResponseDto from "../dto/response/productResponseDto";
import ProductEntity from "../entity/productEntity";

export default class ProductMapper {

    public static lookupMapper(products: ProductEntity[]): ProductResponseDto[] {
        let productData : ProductResponseDto[] = [];
        products.forEach((p: any) => {
            productData.push({
                productId: p?.productId,
                productName: p?.productName,
                price: p?.price,
                quantity: p?.quantity,
                primaryPic: p?.primaryPic,
                productImages: [p?.pic1 , p?.pic2 , p?.pic3 , p?.pic4 , p?.pic5]?.filter(e=> e !== null && e !== undefined )
            });
        });
        return productData;
    }

    public static addProductMapper(request : AddProductRequestDto) : ProductEntity {
        let product : ProductEntity = new ProductEntity();
        product.productName = request.productName;
        product.primaryPic = request.primaryPic;
        product.price = request.price;
        product.quantity = request.quantity;
        product.pic1 = request.pic1;
        product.pic2 = request.pic2;
        product.pic3 = request.pic3;
        product.pic4 = request.pic4;
        product.pic5 = request.pic5;

        return product;
    }

}