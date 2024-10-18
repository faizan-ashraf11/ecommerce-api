import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export default class ProductRequestDto{

    @IsOptional()
    @IsNumber()
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