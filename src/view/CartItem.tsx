import {Product} from "../interfaces";
import {removeItem} from "../cart/CartUtil";

export interface ProductCart {
    product: Product;
    onReloadCart: () => void;
}

export function CartItem(props: ProductCart) {
    return (
        <div className="card mb-3" style={{maxWidth: "none"}}>
            <div className="row g-0">
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <img src={props.product.image} className="img-fluid rounded-start"/>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <div className="card-body">
                        <h5 className="card-title">{props.product.name}</h5>
                        <p className="card-text"><small className="text-muted">{props.product.price} rub</small></p>
                        <button type="button" onClick={() => {removeItem(props.product); props.onReloadCart()}} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}