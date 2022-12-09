import {CartItem, emptyCartItem, Product} from "../interfaces";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {addItemToCart, isExistInCart} from "../api/CartApi";

export interface ProductCard {
    product: Product;
    deleteHandler: (id: number) => void,
}

const item = (product: Product): CartItem => {
    return {
        product: product,
        quantity: 1,
    }
}

export function CatalogCard(props: ProductCard) {
    const [isCart, setIsCart] = useState(isExistInCart(props.product));
    const [ItemCart, setItemCart] = useState(item(props.product));

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
                        <button className="btn btn-primary" hidden={isCart} onClick={() => {addItemToCart(ItemCart); setIsCart(true)}}>add to cart</button>
                        <Link to="/cart" className="btn btn-success" hidden={!isCart}>in cart</Link>
                        <button className="btn btn-danger" onClick={() => props.deleteHandler(props.product.id)}>delete</button>
                    </div>
                </div>
            </div>
    )
}