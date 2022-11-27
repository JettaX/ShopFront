export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
}

export interface BoughtProduct {
    id: number,
    product: Product,
    price: number,
}

export interface newProduct {
    name: string,
    description: string,
    price: number,
    image: string,
}

export let emptyProduct = {
    id: -1,
    name: '',
    description: '',
    price: 0,
    image: '',
}

export let emptyBoughtProduct = {
    id: -1,
    product: emptyProduct,
    price: -1,
}

export interface Order {
    id: number,
    user: any,
    products: Array<BoughtProduct>,
}
export let emptyOrder = {
    id: -1,
    user: "",
    products: Array.of(emptyBoughtProduct),
}

export interface Filter {
    maxValue: number,
    minValue: number,
}

export let defaultFilter = {
    maxValue: 2147483647,
    minValue: 0,
}

export interface Cart {
    products: Array<Product>,
}

export interface CartTransfer {
    userId: number,
    products: Array<Product>,
}