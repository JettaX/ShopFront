import {CartItem, Product} from "../interfaces";
import {axiosCustom, axiosCustomTokenOff} from "./AxiosConfig";
import {getToken} from "../util/TokenUtil";
import {getUser} from "../util/UserUtil";
import {getGuestId, setGuestId} from "../util/GuestUtil";

const cart = axiosCustom('http://localhost:8083/cart/api/cart', getToken());
const guestCart = axiosCustomTokenOff('http://localhost:8083/cart/api/cart/guest');

export const apiAddItemToCart = (product: CartItem, isAuth: boolean) => addItemToCart(product, isAuth);

const addItemToCart = (product: CartItem, isAuth: boolean) => {
    if (isAuth) {
        return cart.post(`/${getUser()?.id}`, product);
    } else {
        return guestCart.post(`/${getGuestId()}`, product);
    }
}
export const apiUpdateQuantity = (product: CartItem, quantity: number, isAuth: boolean) => updateQuantity(product, quantity, isAuth);

const updateQuantity = (product: CartItem, quantity: number, isAuth: boolean) => {
    if (isAuth) {
        return cart.patch(`/${getUser()?.id}/${product.product.id}/${quantity.toString()}`);
    } else {
            return guestCart.patch(`/${getGuestId()}/${product.product.id}/${quantity.toString()}`);
    }
}

export const apiClearCart = (isAuth: boolean) => clearCart(isAuth);

const clearCart = (isAuth: boolean) => {
    if (isAuth) {
        return cart.get(`/clear/${getUser()?.id}`);
    } else {
            return guestCart.get(`/clear/${getGuestId()}`);
    }
}

export const apiGetCart = (isAuth: boolean) => getCart(isAuth);

const getCart = (isAuth: boolean) => {
    if (isAuth) {
        return cart.get(`/${getUser()?.id}`);
    } else {
            return guestCart.get(`/${getGuestId()}`);
    }
}

export const apiRemoveItem = (product: Product, isAuth: boolean) => removeItem(product, isAuth);

const removeItem = (product: Product, isAuth: boolean) => {
    if (isAuth) {
        return cart.delete(`/${getUser()?.id}/${product.id}`);
    } else {
            return guestCart.delete(`/${getGuestId()}/${product.id}`);
    }
}

export const apiGetGuestId = () => guestCart.get('/generateId');

export function apiIsExistInCart(product: Product): boolean {
    return false;
}