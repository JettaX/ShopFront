import {CartCard} from "./CartCard";
import {CartBuyForm} from "./CartBuyForm";
import {useEffect, useState} from "react";
import {emptyCart} from "../interfaces";
import {apiGetCart} from "../api/CartApi";
import {CartFunctionMenu} from "./CartFunctionMenu";

export function Cart() {
    const [cart, setCart] = useState(emptyCart)
    const [isDone, setIsDone] = useState(false)
    const [isEmpty, setEmpty] = useState(true)

    useEffect(() => {
        if (!isDone) {
            apiGetCart().then((data) => {
                    if (data.data === null || (data.data.products.length === 0)) {
                        setEmpty(true)
                    } else {
                        setCart(data.data);
                        setEmpty(false)
                    }
                }
            )
            setIsDone(true);
        }
    }, [isDone])

    function onReloadContext() {
        setIsDone(false);

    }

    function onClearCart() {
        setCart(emptyCart);
        onReloadContext();
    }

    return (<div className="container text-center">
            <h1 hidden={isEmpty}>Cart</h1>
            <h1 hidden={!isEmpty}>Cart is empty</h1>
            <div hidden={isEmpty}>
                <div className="row align-items-start">
                    <div className="col">
                        <div className="mb-3">
                            <CartFunctionMenu onClearCart={onClearCart}></CartFunctionMenu>
                        </div>
                        {
                            cart.products.map(product =>
                                <CartCard onReloadCart={onReloadContext} product={product} key={product.product.id}/>)
                        }
                    </div>
                    <div className="col-2">
                        <CartBuyForm onReloadCart={onClearCart} cart={cart}/>
                    </div>
                </div>
            </div>
        </div>
    )
}