import {axiosCustom} from "./AxiosConfig";
import {Filter, newProduct, Product} from "../interfaces";
import {getToken} from "../util/TokenUtil";

const products = axiosCustom('http://localhost:8083/core/api/products', getToken());

export const apiGetProducts = (filter: Filter, page: number, limit: number, search: string) => products('', {
    method: 'get',
    params: {
        maxPrice: filter.maxPrice,
        minPrice: filter.minPrice,
        name: search,
        page: page,
        limit: limit,
    },
});

export const apiGetCountProducts = (filter: Filter) => products.post('/getCountProducts', filter);

export const apiGetProductById = (id: string) => products.get(id);

export const apiDeleteProductById = (id: number) => products.delete(id.toString());

export const apiCreateProduct = (product: newProduct) => products.post('', product);

export const apiUpdateProduct = (product: Product, id: number) => products.post(`/update/${id}`, product);