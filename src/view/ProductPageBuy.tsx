import {ProductCard} from "./ProductPage";
import {apiAddItemToCart} from "../api/CartApi";
import {CartItem, Product} from "../interfaces";
import {useAuth} from "../auth/Auth";

const item = (product: Product): CartItem => {
    return {
        product: product,
        quantity: 1,
        totalPrice: product.price
    }
}

export function ProductPageBuy(props: ProductCard) {
    let auth = useAuth();
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body row">
                <h5 className="card-title">Price</h5>
                <b className="card-text text-danger pb-3">{props.product.price} ₽</b>
                <a href="#" className="btn btn-primary" onClick={() => apiAddItemToCart(item(props.product), auth.isAuth)}>To cart</a>
            </div>
        </div>
    )
}