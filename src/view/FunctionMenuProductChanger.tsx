import {apiDeleteProductById} from "../api/ProductApi";
import {useState} from "react";
import {emptyProduct} from "../interfaces";
import {Catalog} from "./Catalog";

export function FunctionMenuProductChanger() {
    return (
        <Catalog isChanging={true}></Catalog>
    )
}