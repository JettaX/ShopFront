import {CartCard} from "./CartCard";
import {CartBuyForm} from "./CartBuyForm";
import {useEffect, useState} from "react";
import {emptyCart} from "../interfaces";
import {apiGetCart} from "../api/CartApi";

export function Cart() {
    const [cart, setCart] = useState(emptyCart)
    const [isDone, setIsDone] = useState(false)

    useEffect(() => {
        if (!isDone) {
            apiGetCart().then(data => {
                    if (data.data != null) {
                        setCart(data.data);
                    }
                }
            )
            setIsDone(true);
        }
    }, [isDone])

    function onReloadContext() {
        setIsDone(false);
    }

    return (<div className="container text-center">
        <h1>Cart</h1>
        <div className="row align-items-start">
            <div className="col">
                {
                    cart.products.map(product =>
                        <CartCard onReloadCart={onReloadContext} product={product} key={product.product.id}/>)
                }
            </div>
            <div className="col-2">
                <CartBuyForm cart={cart}/>
            </div>
        </div>
    </div>)
}