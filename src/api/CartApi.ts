import {CartItem, Product} from "../interfaces";
import {apiGetUserId} from "./UserApi";
import {axiosCustom} from "./AxiosConfig";
import {getToken} from "../util/TokenUtil";
import {getUser} from "../util/UserUtil";

const cart = axiosCustom('http://localhost:8082/api/cart', getToken());

export const apiAddItemToCart = (product: CartItem) => cart.post(`/${getUser()?.id}`, product);

export const apiUpdateQuantity = (product: CartItem, quantity: number) => cart.patch(`/${getUser()?.id}/${product.product.id}/${quantity.toString()}`)

export const apiClearCart = () => cart.get(`/clear/${getUser()?.id}`);

export const apiGetCart = () => cart.get(`/${getUser()?.id}`);

export const apiRemoveItem = (product: Product) => cart.delete(`/${getUser()?.id}/${product.id}`);

export function apiIsExistInCart(product: Product): boolean {
    return false;
}