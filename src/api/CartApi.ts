import {CartItem, Product} from "../interfaces";
import {getUserId} from "./UserApi";
import {axiosCustom} from "./AxiosConfig";
import {getToken} from "../util/TokenUtil";

const cart = axiosCustom('http://localhost:8081/api/cart', getToken());

export const addItemToCart = (product: CartItem) => cart.post(`/${getUserId()}`, product);

export const updateQuantity = (product: CartItem, quantity: number) => cart.patch(`/${getUserId()}/${product.product.id}/${quantity}`)

export const clearCart = () => cart.delete(`/clear/${getUserId()}`);

export const getCart = () => cart.get(`/${getUserId()}`);

export const removeItem = (product: Product) => cart.delete(`/${getUserId()}/${product.id}`);

export function isExistInCart(product: Product): boolean {
    return false;
}