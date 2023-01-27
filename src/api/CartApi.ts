import {CartItem, Product} from "../interfaces";
import {axiosCustom} from "./AxiosConfig";
import {getToken} from "../util/TokenUtil";
import {getGuestId} from "../util/GuestUtil";

const cart = axiosCustom('http://localhost:8083/cart/api/cart', getToken());
const cartNow = (token: string) => axiosCustom('http://localhost:8083/cart/api/cart', token);

export const apiAddItemToCart = (product: CartItem, isAuth: boolean) => addItemToCart(product, isAuth);

const addItemToCart = (product: CartItem, isAuth: boolean) => {
    if (isAuth) {
        return cart.post("/", product);
    } else {
        return cart.post("/", product, {
            headers: {
                'guestId': getGuestId()
            }
        });
    }
}
export const apiUpdateQuantity = (product: CartItem, quantity: number, isAuth: boolean) => updateQuantity(product, quantity, isAuth);

const updateQuantity = (product: CartItem, quantity: number, isAuth: boolean) => {
    if (isAuth) {
        return cart.patch(`/${product.product.id}/${quantity.toString()}`);
    } else {
        return cart.patch(`/${product.product.id}/${quantity.toString()}`, null, {
            headers: {
                'guestId': getGuestId()
            }
        });
    }
}

export const apiClearCart = (isAuth: boolean) => clearCart(isAuth);

const clearCart = (isAuth: boolean) => {
    if (isAuth) {
        return cart.get(`/clear`);
    } else {
        return cart.get(`/clear`, {
            headers: {
                'guestId': getGuestId()
            }
        });
    }
}

export const apiGetCart = (isAuth: boolean) => getCart(isAuth);

const getCart = (isAuth: boolean) => {
    if (isAuth) {
        return cart.get("/");
    } else {
        return cart.get("", {
            headers: {
                'guestId': getGuestId()
            }
        });
    }
}

export const apiRemoveItem = (product: Product, isAuth: boolean) => removeItem(product, isAuth);

const removeItem = (product: Product, isAuth: boolean) => {
    if (isAuth) {
        return cart.delete(`/${product.id}`);
    } else {
        return cart.delete(`/${product.id}`, {
            headers: {
                'guestId': getGuestId()
            }
        });
    }
}

export const apiMergeGuestCart = (token: string) => cartNow(token).post(`/merge/${getGuestId()}`);

export function apiIsExistInCart(product: Product): boolean {
    return false;
}