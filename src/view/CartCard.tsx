import {CartItem} from "../interfaces";
import {apiRemoveItem, apiUpdateQuantity} from "../api/CartApi";
import {ChangeEvent, useEffect, useState} from "react";
import {useAuth} from "../auth/Auth";
import {KeyObject} from "crypto";

export interface ProductCart {
    product: CartItem;
    onReloadCart: () => void;
}

export function CartCard(props: ProductCart) {
    const [quantity, setQuantity] = useState(props.product.quantity);
    const [product, setProduct] = useState(props.product);
    const [isQuantityMore, setQuantityMore] = useState(false);

    useEffect(() => {
        if (quantity > 9) {
            setQuantityMore(true);
        }
    })

    const handleChange = (event: any) => {
        let value = quantityValidate(event.currentTarget.value);
        if (value < 10) {
            apiUpdateQuantity(product, value).then((data) => {
                setProduct(data.data);
                setQuantity(value);
                props.onReloadCart()
            })
        } else {
            setQuantityMore(true);
        }
    }

    const customHandleChange = (event: any) => {
        let value = quantityValidate(event.currentTarget.value);
        apiUpdateQuantity(product, value).then((data) => {
            setProduct(data.data);
            setQuantity(value);
            props.onReloadCart()
        })
    }

    return (
        <div className="card mb-3" style={{maxWidth: "none"}}>
            <div className="d-flex">
                <div className="w-25 align-self-center">
                    <img src={product.product.image} className="img-fluid rounded-start"/>
                </div>
                <div className="d-flex w-100">
                    <div className="align-self-center flex-grow-1" style={{textAlign: "start", width: "100%"}}>
                        <div className="card-body">
                            <h5 className="card-title">{product.product.name}</h5>
                            <p className="card-text"><small
                                className="text-muted">{product.product.price} ₽/ one</small></p>
                            <p className="card-text"><small
                                className="text-muted">{product.totalPrice} ₽/ total</small></p>
                            <button type="button" onClick={() => {
                                apiRemoveItem(product.product).then(resp => resp.status === 200 ? props.onReloadCart() : false);
                            }} className="btn btn-danger">Delete
                            </button>
                        </div>
                    </div>
                    <div className="align-self-center flex-grow-0 m-lg-5">
                        <select disabled={isQuantityMore} hidden={isQuantityMore} style={{width: "5rem"}}
                                className="form-select"
                                value={quantity} onChange={handleChange}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10+</option>
                        </select>
                        <input disabled={!isQuantityMore} value={quantity} onInput={customHandleChange}
                               hidden={!isQuantityMore} style={{width: "5rem"}}
                               className="form-select"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function quantityValidate(value: number): number {
    if (value < 1) {
        return 1;
    }
    return value;
}