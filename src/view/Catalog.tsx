import React, {useEffect, useState} from "react";
import {defaultFilter, emptyProduct, Filter} from "../interfaces";
import {deleteProductById, getProducts} from "../api/api";
import {CatalogCard} from "./CatalogCard";
import {CatalogFilter} from "./CatalogFilter";

export function Catalog() {
    const [Products, setProducts] = useState({
        products: Array.of(emptyProduct),
    })
    const [Filter, setFilter] = useState({
        filter: defaultFilter,
    })

    function filterChanged(filter: Filter) {
        setFilter({
            filter: filter,
        })
    }

    useEffect(() => {
                getProducts(Filter.filter).then((products) => {
                    setProducts({products: products.data});
                })
        }, [Filter.filter]
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
        <div className="d-flex">
            <div className="flex-grow-0" style={{maxWidth: "12rem"}}>
                <CatalogFilter filterHandler={filterChanged} filter={Filter.filter}/>
            </div>
            <div className="container-fluid flex-grow-1">
                <div className="row justify-content-center">
                    {Products.products.map((product) => (
                        <CatalogCard product={product} deleteHandler={deleteHandler} key={product.id}></CatalogCard>
                    ))}
                </div>
            </div>
        </div>
    );
}