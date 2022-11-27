import React, {useEffect, useState} from "react";
import {defaultFilter, emptyProduct, Filter} from "../interfaces";
import {deleteProductById, getCountProducts, getProducts} from "../api/api";
import {CatalogCard} from "./CatalogCard";
import {CatalogFilter} from "./CatalogFilter";
import {CatalogPagination} from "./CatalogPagination";

export function Catalog() {
    const [Products, setProducts] = useState({
        products: Array.of(emptyProduct),
    })
    const [Filter, setFilter] = useState({
        filter: defaultFilter,
    })
    const [offset, setOffset] = useState(0)
    const [countProducts, setCountProducts] = useState(0)
    const [limit, setLimit] = useState(20)

    function filterChanged(filter: Filter) {
        setFilter({
            filter: filter,
        })
    }

    useEffect(() => {
            getProducts(Filter.filter, offset, limit).then((products) => {
                setProducts({products: products.data});
            })
        }, [Filter.filter, offset]
    );

    useEffect(() => {
            getCountProducts(Filter.filter).then((count) => {
                setCountProducts(count.data);
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

    function changeOffset(offset: number) {
        setOffset(offset);
        // @ts-ignore
        document.scrollingElement.scrollTop = 0;
    }

    return (
        <div>
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
            <CatalogPagination changeOffset={changeOffset} offset={offset} limit={limit} products={countProducts}/>
        </div>
    );
}