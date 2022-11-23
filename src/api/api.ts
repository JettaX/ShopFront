import axios from "axios";
import {newProduct} from "../interfaces";
import {stringify} from "querystring";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

const apiGet = (method: string) => axios.get(`http://localhost:8081/api/${method}`, config);

const apiPost = (method: string, customConfig: object) => axios.post(`http://localhost:8081/api/${method}`, customConfig);

const apiDelete = (method: string) => axios.delete(`http://localhost:8081/api/${method}`, config);

export const getProducts = apiGet('product/getProducts');

export const getUserOrders = (userId: number) => apiGet(`orders/getUserOrders/${userId}`);

export const getCountOfBought = (productId: number) => apiGet(`orders/getCountOfBought/${productId}`);

export const getProductById = (id: string) =>  apiGet(`product/getProductsById/${id}`);

export const deleteProductById = (id: number) => apiDelete('product/deleteProduct/' + id);

export const createProduct = (product: newProduct) => apiPost('product/addProduct', product);