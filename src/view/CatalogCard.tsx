import {CartItem, emptyCartItem, Product} from "../interfaces";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {apiAddItemToCart, apiIsExistInCart} from "../api/CartApi";
import {useAuth} from "../auth/Auth";

export interface ProductCard {
    product: Product;
    deleteHandler?: (id: number) => void,
    changeHandler?: (id: number) => void,
    isChanging: boolean,
}

const item = (product: Product): CartItem => {
    return {
        product: product,
        quantity: 1,
    }
}

export function CatalogCard(props: ProductCard) {
    const [isCart, setIsCart] = useState(apiIsExistInCart(props.product));
    const [ItemCart, setItemCart] = useState(item(props.product));
    let auth = useAuth();

    return (
        <div className="card row m-2" style={{width: "18rem"}}>
            <div className="row flex-grow-1 align-self-center">
                <div className="align-self-center">
                    <img src={props.product.image} className="card-img-top" alt={props.product.name}/>
                </div>
            </div>
            <div className="card-body flex-grow-0">
                <Link to={`/product/${props.product.name}/${props.product.id}`} className="page-link">
                    <h4 className="card-title">{props.product.name}</h4>
                </Link>
                <b className="card-subtitle">{props.product.price} rub</b>
                <p className="card-text">{props.product.description.slice(0, 50)}</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" disabled={!auth.isAuth} hidden={isCart || props.isChanging} onClick={() => {
                        apiAddItemToCart(ItemCart);
                        setIsCart(true)
                    }}>add to cart
                    </button>
                    <Link to="/cart" className="btn btn-success" hidden={!isCart || props.isChanging}>in cart</Link>
                </div>
                <div className="d-flex justify-content-between" hidden={props.isChanging}>
                    <button className="btn btn-danger" hidden={!props.isChanging}
                            onClick={() => props.deleteHandler !== undefined ? props.deleteHandler(props.product.id) : false}>delete
                    </button>
                    <Link className="btn btn-primary" hidden={!props.isChanging} to={`/function/menu/productChanger/${props.product.id}`}>change</Link>
                </div>
            </div>
        </div>
    )
}