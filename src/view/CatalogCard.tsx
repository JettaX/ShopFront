import {Product} from "../interfaces";
import {addItemToCart} from "../cart/CartUtil";
import {Link} from "react-router-dom";
import {ProductPage} from "./ProductPage";
import React from "react";

export interface ProductCard {
    product: Product;
    deleteHandler: (id: string) => void,
}

export function CatalogCard(props: ProductCard) {
    return (
        <div className="card row m-2" style={{width: "18rem"}}>
            <div className="row flex-grow-1 align-self-center">
                <div className="align-self-center">
                    <img src={props.product.image} className="card-img-top"/>
                </div>
            </div>
            <div className="card-body flex-grow-0">
                <Link to={`/product/${props.product.name}/${props.product.id}`} className="page-link">
                    <h4 className="card-title">{props.product.name}</h4>
                </Link>
                <b className="card-subtitle">{props.product.price} rub</b>
                <p className="card-text">{props.product.description.slice(0, 50)}</p>
                <div className="d-flex justify-content-between">
                    <a className="btn btn-primary" onClick={() => addItemToCart(props.product)}>to cart</a>
                    <a className="btn btn-danger" onClick={() => props.deleteHandler(props.product.id)}>delete</a>
                </div>
            </div>
        </div>
    )
}