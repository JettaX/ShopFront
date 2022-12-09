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

export let emptyProduct: Product = {
    id: -1,
    name: '',
    description: '',
    price: 0,
    image: '',
}

export let emptyBoughtProduct: BoughtProduct = {
    id: -1,
    product: emptyProduct,
    price: -1,
}

export interface Order {
    id: number,
    user: any,
    products: Array<BoughtProduct>,
}

export let emptyOrder: Order = {
    id: -1,
    user: "",
    products: Array.of(emptyBoughtProduct),
}

export interface Filter {
    maxPrice: number,
    minPrice: number,
}

export let defaultFilter: Filter = {
    maxPrice: 2147483647,
    minPrice: 1,
}

export let defaultPageProduct: PageProduct = {
    content: Array.of(emptyProduct)
}

export interface PageProduct {
    content?: Array<Product>,
    pageable?: {
        sort: {
            empty: boolean,
            sorted: boolean,
            unsorted: boolean
        },
        offset: number,
        pageSize: number,
        pageNumber: number,
        paged: boolean,
        unpaged: boolean
    },
    last?: boolean,
    totalElements?: number,
    totalPages?: number,
    size?: number,
    number?: number,
    sort?: {
        empty: boolean,
        sorted: boolean,
        unsorted: boolean
    },
    first?: boolean,
    numberOfElements?: number,
    empty?: boolean
}

export interface CartItem {
    product: Product,
    quantity: number,
}

export const emptyCartItem: CartItem = {
    product: emptyProduct,
    quantity: 0,
}

export interface Cart {
    products: Array<CartItem>,
}

export const emptyCart: Cart = {
    products: Array.of(),
}

export interface CartTransfer {
    userId: number,
    products: Array<CartItem>,
}