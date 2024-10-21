import { IsNotEmpty, IsNumber } from "class-validator";

export default class FavoritesRequestDto {
    
    @IsNumber()
    @IsNotEmpty()
    userId: number;

}

export class FavoritesAddRequestDto {

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    productId: number;
    
}

export class FavoritesDeleteResquestDto {

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    productId: number;

}