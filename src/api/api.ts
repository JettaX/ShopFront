import axios from "axios";
import {newProduct} from "../interfaces";
import {stringify} from "querystring";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

const apiGet = (method: string) => axios.get(`http://localhost:8081/api/product/${method}`, config);

const apiPost = (method: string, customConfig: object) => axios.post(`http://localhost:8081/api/product/${method}`, customConfig);

const apiDelete = (method: string) => axios.delete(`http://localhost:8081/api/product/${method}`, config);

export const getProducts = apiGet('getProducts');

export const getProductById = (id: string) =>  apiGet(`getProductsById/${id}`);

export const deleteProductById = (id: number) => apiDelete('deleteProduct/' + id);

export const createProduct = (product: newProduct) => apiPost('addProduct', product);