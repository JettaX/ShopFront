import React, {useEffect, useState} from "react";
import {emptyProduct} from "../interfaces";
import {deleteProductById, getProducts} from "../api/api";
import {CatalogCard} from "./CatalogCard";

export function Catalog() {
    const [Products, setProducts] = useState({
        products: Array.of(emptyProduct),
    })
    const [load, setLoad] = useState({
        isLoad: false,
    });

    useEffect(() => {
            if (!load.isLoad) {
                getProducts.then((products) => {
                    setProducts({products: products.data});
                })
                setLoad({isLoad: true});
            }
        }, [load.isLoad]
    );

    function deleteHandler(id: number) {
        deleteProductById(id).then(r => {
                if (r.status === 200) {
                    setProducts({products: Products.products.filter(product => product.id !== id)});
                }
            }
        )
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {Products.products.map((product) => (
                    <CatalogCard product={product} deleteHandler={deleteHandler} key={product.id}></CatalogCard>
                ))}
            </div>
        </div>
    );
}