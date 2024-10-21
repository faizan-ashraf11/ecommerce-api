import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export default class ProductRequestDto{

    @IsNumber()
    @IsOptional()
    productId: number;
    
}

export class AddProductRequestDto{

    @IsString()
    @IsNotEmpty()
    productName: string;

    @IsString()
    @IsNotEmpty()
    primaryPic: string;

    @IsString()
    @IsNotEmpty()
    pic1: string;

    @IsString()
    @IsOptional()
    pic2: string;

    @IsString()
    @IsOptional()
    pic3: string;

    @IsString()
    @IsOptional()
    pic4: string;

    @IsString()
    @IsOptional()
    pic5: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

}

export class ProductDeleteRequestDto{

    @IsNumber()
    @IsNotEmpty()
    productId: number;
    
}
export class UpdateProductRequestDto{

    @IsNumber()
    @IsNotEmpty()
    productId: number;

    @IsString()
    @IsNotEmpty()
    productName: string;

    @IsString()
    @IsNotEmpty()
    primaryPic: string;

    @IsString()
    @IsNotEmpty()
    pic1: string;

    @IsString()
    @IsOptional()
    pic2: string;

    @IsString()
    @IsOptional()
    pic3: string;

    @IsString()
    @IsOptional()
    pic4: string;

    @IsString()
    @IsOptional()
    pic5: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;
    
}