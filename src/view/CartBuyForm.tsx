import {Cart} from "../interfaces";
import React, {useEffect, useState} from "react";
import {apiCreateOrder} from "../api/OrderApi";

interface CartBuyFormProps {
    cart: Cart,
    onReloadCart: () => void,
}

export function CartBuyForm(props: CartBuyFormProps) {
    const [price, setPrice] = useState(getTotalPrice());
    const [isBlock, setBlock] = useState(false);

    useEffect(() => {
        setPrice(getTotalPrice());
    }, [props.cart.products]);

    function getTotalPrice() {
        if (props.cart.products.length < 1) {
            return 0;
        }
        return props.cart.products
            .map(product => product.product.price * product.quantity)
            .reduce((previousValue: number, currentValue: number) =>
                previousValue + currentValue).valueOf();
    }

    function buy() {
        setBlock(true);
        apiCreateOrder().then((resp) => {
            if (resp.status === 200) {
                props.onReloadCart();
            }
        })
    }

    return (
        <div className="card text-center" style={{width: "10rem;"}}>
            <div className="card-body">
                <h5 className="card-title">Total price</h5>
                <p className="card-text">{price}</p>
                <button disabled={isBlock} onClick={() => buy()} className="btn btn-success">Buy</button>
            </div>
        </div>
    );
}