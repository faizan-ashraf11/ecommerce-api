import CartMapper from "../mapper/cartMapper";
import Response from "../common/responce/Responce";
import CartResponseDto from "../dto/response/cartResponseDto";
import { CartRepository } from "../repository/cartRepository";
import CartEntity from "../entity/cartEntity";
import { Cart_REMOVED, CREATED, Not_Found } from "../common/responce/StatusCode";
import { EntityManager } from "typeorm";

export default class CartService {

    private cartRepo = CartRepository;

    async getCarts(userId: number) : Promise<Response<CartResponseDto>>{
        let data : CartEntity[] = await this.cartRepo.getCartProductsByUserId(userId);
        let mappedData = await CartMapper.lookupMap(data);
        return new Response<any>(mappedData);
    }

    async addToCart(request: any) : Promise<Response<any>>{
        let cart : CartEntity;

        await this.cartRepo.manager.transaction(async (entityManager: EntityManager) => {
            cart = CartMapper.addCartMapper(request);
            cart = await entityManager.save(cart);
        })

        return new Response<any>(CREATED);
    }

    async removeProductFromCart(productId: number , userId: number) : Promise<Response<any>>{
        let cart : CartEntity;

        await this.cartRepo.manager.transaction(async (entityManager: EntityManager) => {
            cart = await this.cartRepo.getCartby_UserId_ProductId(userId , productId);
            if(!cart) {
                return;
            }
            cart = await entityManager.remove(cart);
        })

        if(!cart){
            return new Response<any>(Not_Found);
        }
        return new Response<any>(Cart_REMOVED);
    }

}