import { IsNotEmpty, IsNumber } from "class-validator";

export default class CartRequestDto {

    @IsNumber()
    @IsNotEmpty()
    userId: number;

}

export class CartAddRequestDto {

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    productId: number;
    
}

export class CartDeleteResquestDto {

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    productId: number;

}