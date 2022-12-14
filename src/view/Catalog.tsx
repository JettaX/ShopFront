import React, {useEffect, useState} from "react";
import {defaultFilter, emptyProduct, Filter, PageProduct, Product} from "../interfaces";
import {CatalogCard} from "./CatalogCard";
import {CatalogFilter} from "./CatalogFilter";
import {CatalogPagination} from "./CatalogPagination";
import {deleteProductById, getProducts} from "../api/ProductApi";
import {useAuth} from "../util/Auth";
import {AxiosResponse} from "axios";

const DEFAULT_PAGE = 0;
const DEFAULT_PAGES = 1;

export interface CatalogProps {
    isChanging?: boolean,
}

export function Catalog(props: CatalogProps) {
    const [Products, setProducts] = useState(Array.of(emptyProduct))
    const [Filter, setFilter] = useState(defaultFilter)
    const [page, setPage] = useState(DEFAULT_PAGE)
    const [pages, setPages] = useState(DEFAULT_PAGES)
    const [limit] = useState(20)
    let auth = useAuth();
    let changing = props.isChanging === undefined ? false : props.isChanging;

    function filterChanged(filter: Filter) {
        setFilter(filter)
        setPage(DEFAULT_PAGE)
    }

    function deleteHandler(id: number) {
        deleteProductById(id).then(r => {
                if (r.status === 200) {
                    setProducts(Products.filter(product => product.id !== id));
                }
            }
        )
    }

    useEffect(() => {
            getProducts(Filter, page, limit)
                .then((page: AxiosResponse<PageProduct>) => {
                    if (page.data.content !== undefined) {
                        setProducts(page.data.content);
                    }
                    if (page.data.totalPages !== undefined) {
                        setPages(page.data.totalPages);
                    }
                })
        }, [Filter, page]
    );


    function changePage(page: number) {
        setPage(page);
        if (document.scrollingElement !== null) {
            document.scrollingElement.scrollTop = 0;
        }
    }

    return (
        <div>
            <div className="d-flex">
                <div className="flex-grow-0" style={{maxWidth: "12rem"}}>
                    <CatalogFilter filterHandler={filterChanged} filter={Filter}/>
                </div>
                <div className="container-fluid flex-grow-1">
                    <div className="row justify-content-center">
                        {Products.map((product) => (
                            <CatalogCard product={product} deleteHandler={changing ? deleteHandler : undefined} isChanging={changing} key={product.id}></CatalogCard>
                        ))}
                    </div>
                </div>
            </div>
            <CatalogPagination changePage={changePage} pages={pages}/>
        </div>
    );
}