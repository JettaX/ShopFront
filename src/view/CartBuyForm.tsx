import {Cart} from "../interfaces";
import React, {useState} from "react";
import {apiCreateOrder} from "../api/OrderApi";
import {RequireAuth, useAuth} from "../auth/Auth";

interface CartBuyFormProps {
    cart: Cart,
    onReloadCart: () => void,
}

export function CartBuyForm(props: CartBuyFormProps) {
    const [isBlock, setBlock] = useState(false);
    let auth = useAuth();

    function buy() {
        if (auth.isAuth) {
            setBlock(true);
            apiCreateOrder().then((resp) => {
                if (resp.status === 200) {
                    props.onReloadCart();
                }
            })
        }
    }

    return (
        <div className="card text-center" style={{width: "10rem;"}}>
            <div className="card-body">
                <h5 className="card-title">Total price</h5>
                <p className="card-text">{props.cart.total}</p>
                <button disabled={isBlock || !auth.isAuth} onClick={() => buy()} className="btn btn-success">Buy</button>
            </div>
        </div>
    );
}