import {getCart} from "../cart/CartUtil";
import {CartItem} from "./CartItem";
import {CartBuyForm} from "./CartBuyForm";
import {useState} from "react";

export function Cart() {
    const [Products, setProducts] = useState({
        products: getCart(),
    })

    function onReloadContext() {
        setProducts({products: getCart()});
    }

    console.log(getCart());
    return (<div className="container text-center">
        <h1>Cart</h1>
        <div className="row align-items-start">
            <div className="col">
                {
                    Products.products.map(product => <CartItem onReloadCart={onReloadContext} product={product} key={product.id}/>)
                }
            </div>
            <div className="col-2">
                <CartBuyForm/>
            </div>
        </div>
    </div>)
}