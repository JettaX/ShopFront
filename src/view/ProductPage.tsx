import {ProductPageTitleCard} from "./ProductPageTitleCard";
import {useEffect, useState} from "react";
import {emptyProduct, Product} from "../interfaces";
import {getProductById, getProducts} from "../api/api";
import {useParams} from "react-router-dom";
import {ProductPageDescriptionCard} from "./ProductPageDescriptionCard";
import {ProductPageBuy} from "./ProductPageBuy";

export interface ProductCard {
    product: Product;
}

export function ProductPage() {
    const [Product, setProduct] = useState({
        product: emptyProduct,
    })
    const [load, setLoad] = useState({
        isLoad: false,
    });
    let {id} = useParams();

    useEffect(() => {
            console.log(id)
            if (!load.isLoad && id !== undefined) {
                getProductById(id).then((product) => {
                    setProduct({product: product.data});
                })
                setLoad({isLoad: true});
            }
        }, [id, load.isLoad]
    );

    return (
        <div className="m-2">
            <div className="row align-items-start">
                <div className="col flex-grow-1">
                    <ProductPageTitleCard product={Product.product}/>
                </div>
                <div className="col flex-grow-0">
                    <ProductPageBuy product={Product.product}/>
                </div>
            </div>
            <ProductPageDescriptionCard product={Product.product}/>
        </div>
    )
}