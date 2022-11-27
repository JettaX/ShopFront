import axios, {Axios} from "axios";
import {defaultFilter, Filter, newProduct} from "../interfaces";

const axiosCustom = axios.create({
    baseURL: 'http://localhost:8081/api/',
    timeout: 1000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
});

export const getProducts = (filter: Filter, offset: number, limit: number) => axiosCustom('product/getProducts', {
    method: 'post',
    data: filter,
    params: {
        offset: offset,
        limit: limit
    },
});

export const getCountProducts = (filter: Filter) => axiosCustom.post('product/getCountProducts', filter);

export const getUserOrders = (userId: number) => axiosCustom.get(`orders/getUserOrders/${userId}`);

export const getCountOfBought = (productId: number) => axiosCustom.get(`orders/getCountOfBought/${productId}`);

export const getProductById = (id: string) => axiosCustom.get(`product/getProductsById/${id}`);

export const deleteProductById = (id: number) => axiosCustom.delete('product/deleteProduct/' + id);

export const createProduct = (product: newProduct) => axiosCustom.post('product/addProduct', product);