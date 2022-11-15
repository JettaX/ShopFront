import {ProductCard} from "./ProductPage";
import {addItemToCart} from "../cart/CartUtil";

export function ProductPageBuy(props: ProductCard) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body row">
                <h5 className="card-title">Price</h5>
                <b className="card-text text-danger pb-3">{props.product.price} rub</b>
                <a href="#" className="btn btn-primary" onClick={() => addItemToCart(props.product)}>To cart</a>
            </div>
        </div>
    )
}