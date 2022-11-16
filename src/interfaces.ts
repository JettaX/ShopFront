export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
}

export interface newProduct {
    name: string,
    description: string,
    price: number,
    image: string,
}

export let emptyProduct = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    image: '',
}

export interface Cart {
    products: Array<Product>,
}

export interface CartTransfer {
    userId: string,
    products: Array<Product>,
}