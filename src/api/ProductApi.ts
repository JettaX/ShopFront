import {axiosCustom} from "./AxiosConfig";
import {Filter, newProduct} from "../interfaces";

const products = axiosCustom('http://localhost:8081/api/products');

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

export const getProductById = (id: string) => products.get(id);

export const deleteProductById = (id: number) => products.delete(id.toString());

export const createProduct = (product: newProduct) => products.post('', product);