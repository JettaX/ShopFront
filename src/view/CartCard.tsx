import {CartItem} from "../interfaces";
import {isExistInCart, removeItem, updateQuantity} from "../api/CartApi";
import {useState} from "react";

export interface ProductCart {
    product: CartItem;
    onReloadCart: () => void;
}

export function CartCard(props: ProductCart) {
    const [quantity, setQuantity] = useState(props.product.quantity);
    const [product, setProduct] = useState(props.product);


    const handleChange = (event: any) => {
        setQuantity(event.target.value);
        updateQuantity(product, event.target.value).then((data) => {
            setProduct(data.data);
        })
    }

    return (
        <div className="card mb-3" style={{maxWidth: "none"}}>
            <div className="d-flex">
                <div className="w-25 align-self-center">
                    <img src={product.product.image} className="img-fluid rounded-start"/>
                </div>
                <div className="d-flex w-100">
                    <div className="align-self-center flex-grow-1" style={{textAlign: "start"}}>
                        <div className="card-body">
                            <h5 className="card-title">{product.product.name}</h5>
                            <p className="card-text"><small
                                className="text-muted">{product.product.price} rub</small></p>
                            <button type="button" onClick={() => {
                                removeItem(product.product).then(resp => resp.status === 200 ? props.onReloadCart() : false);
                            }} className="btn btn-danger">Delete
                            </button>
                        </div>
                    </div>
                    <div className="align-self-center flex-grow-0 m-lg-5">
                        <select className="form-select" value={quantity} onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="">any</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}