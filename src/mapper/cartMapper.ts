import { CartAddRequestDto } from "../dto/request/cartRequestDto";
import CartResponseDto from "../dto/response/cartResponseDto";
import CartEntity from "../entity/cartEntity";


export default class CartMapper {

    public static lookupMap(carts: CartEntity[]): CartResponseDto[] {
        let cartProducts : CartResponseDto[] = [];
        console.log('carts' , carts);
        carts.forEach((d: any)=>{
            cartProducts.push({
                cartId: d?.cartId,
                userId: d?.userId,
                userName: d?.users?.userName,
                productId: d?.productId,
                productName: d?.products?.productName,
                quantity: d?.products?.quantity,
                price: d?.products?.price,
                primaryPic: d?.products?.primaryPic,
                productImages: [d?.products?.pic1 , d?.products?.pic2 , d?.products?.pic3 , d?.products?.pic4 , d?.products?.pic5]?.filter(e=> e !== null && e !== undefined )
            })
        })
        return cartProducts;
    }

    public static addCartMapper(request: CartAddRequestDto) : CartEntity {
        let cart = new CartEntity();

        cart.userId = request?.userId;
        cart.productId = request?.productId;

        return cart;
    }
}