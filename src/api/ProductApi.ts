import {axiosCustom} from "./AxiosConfig";
import {Filter, newProduct, Product} from "../interfaces";
import {getToken} from "../util/TokenUtil";

const products = axiosCustom('http://localhost:8081/api/products', getToken());

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

export const updateProduct = (product: Product, id: number) => products.post(`/update/${id}`, product);