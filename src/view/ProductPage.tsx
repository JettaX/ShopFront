import {ProductPageTitleCard} from "./ProductPageTitleCard";
import React, {useEffect, useState} from "react";
import {emptyProduct, Product} from "../interfaces";
import {useParams} from "react-router-dom";
import {ProductPageDescriptionCard} from "./ProductPageDescriptionCard";
import {ProductPageBuy} from "./ProductPageBuy";
import {FunctionalPanelOnCatalogCard} from "./FunctionalPanelOnCatalogCard";
import {apiGetProductById} from "../api/ProductApi";

export interface ProductCard {
    product: Product;
}

export function ProductPage() {
    const [Product, setProduct] = useState(emptyProduct)
    const [load, setLoad] = useState({
        isLoad: false,
    });
    let {id} = useParams();

    useEffect(() => {
            if (!load.isLoad && id !== undefined) {
                apiGetProductById(id).then((product) => {
                    setProduct(product.data);
                })
                setLoad({isLoad: true});
            }
        }, [id, load.isLoad]
    );

    return (
        <div className="m-2">
            <div className="row align-items-start">
                <FunctionalPanelOnCatalogCard productId={Product.id}/>
                <div className="col flex-grow-1">
                    <ProductPageTitleCard product={Product}/>
                </div>
                <div className="col flex-grow-0">
                    <ProductPageBuy product={Product}/>
                </div>
            </div>
            <ProductPageDescriptionCard product={Product}/>
        </div>
    )
}