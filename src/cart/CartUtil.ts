import {Product} from "../interfaces";

let cart: Array<Product> = new Array<Product>();

export function addItemToCart(product: Product) {
    cart.push(product);
}

export function clearCart() {
    cart = new Array<Product>();
}

export function getCart(): Array<Product> {
    return cart;
}

export function removeItem(product: Product) {
    cart = cart.filter((p) => {
        return p.id!== product.id;
    });
}
