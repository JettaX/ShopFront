import axios from "axios";
import {Filter, newProduct} from "../interfaces";

const axiosCustom = (baseUrl: string) => axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
});

const products = axiosCustom('http://localhost:8081/api/products');
const orders = axiosCustom('http://localhost:8081/api/orders');

export const getProducts = (filter: Filter, page: number, limit: number) => products('', {
    method: 'get',
    params: {
        maxPrice: filter.maxPrice,
        minPrice: filter.minPrice,
        page: page,
        limit: limit,
    },
});

export const getCountProducts = (filter: Filter) => products.post('/getCountProducts', filter);

export const getUserOrders = (userId: number) => orders.get(`/getUserOrders/${userId}`);

export const getCountOfBought = (productId: number) => orders.get(`/getCountOfBought/${productId}`);

export const getProductById = (id: string) => products.get(id);

export const deleteProductById = (id: number) => products.delete(id.toString());

export const createProduct = (product: newProduct) => products.post('', product);