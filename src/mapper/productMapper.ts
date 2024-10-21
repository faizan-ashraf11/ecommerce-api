import { AddProductRequestDto } from "dto/request/productRequestDto";
import ProductResponseDto from "../dto/response/productResponseDto";
import ProductEntity from "../entity/productEntity";
import * as fs from 'fs';
import * as path from 'path';

export default class ProductMapper {

    public static lookupMapper(products: ProductEntity[]): ProductResponseDto[] {
        let productData : ProductResponseDto[] = [];
        products.forEach((p: any) => {
            productData.push({
                productId: p?.productId,
                productName: p?.productName,
                price: p?.price,
                quantity: p?.quantity,
                // primaryPic: this.generateLinkForImage(p?.primaryPic , p?.productId , 0),
                // productImages: [p?.pic1 , p?.pic2 , p?.pic3 , p?.pic4 , p?.pic5]?.filter(e=> e !== null && e !== undefined )?.map((base64: string , index: number)=>{
                //     return this.generateLinkForImage(base64 , p?.productId , index+1);
                // })
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

    public static generateLinkForImage(base64String: string , productId: number , index: number) : string {

        const base64 = base64String.replace('/^data:image\/\w+;base64,/' , '');
        const buffers = Buffer.from(base64 , 'base64');

        const uploadDirector = path.join(__dirname , '../uploads' , String(productId));
        if(!fs.existsSync(uploadDirector)){
            fs.mkdirSync(uploadDirector , { recursive: true });
        }

        const fileName = `image_${index}.jpg`;
        const filePath = path.join(uploadDirector , fileName);
        fs.writeFileSync(filePath , buffers);

        return `http://localhost:4300/uploads/${productId}/${fileName}`;
    }
}