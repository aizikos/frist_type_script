export interface Product {
    id: number;
    name: string;
    img: string;
    price: number;
    quantly: number;
}

export interface Basket{
    id: number;
    name: string;
    img: string;
    price: number;
    quantly:number;
}



export interface UserState{
    product: Product[],
    basket: Basket[]
}


export const ADD_Product = 'ADD_Product'
export const EDIT_Product = 'EDIT_Product'
export const DELETE_Product = 'DELETE_Product'
export const BASKET_PRODUCT = 'BASKET_PRODUCT'
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY"
export const DELETE_BASKET = 'DELETE_BASKET'


export interface CreateProduct {
    type: typeof ADD_Product,
    payload: Product,
    [key: string]: unknown
}
export interface EditProduct {
    type: typeof EDIT_Product,
    payload: Product,
    [key: string]: unknown
}
export interface DeleteProduct {
    type: typeof DELETE_Product,
    payload: number,
    [key: string]: unknown
}

export interface BasketProduct{
    type: typeof BASKET_PRODUCT,
    payload: Product,
    [key:string]:unknown
}

export interface IncrementQuantity{
    type: typeof INCREMENT_QUANTITY,
    payload:number,
    [key:string]: unknown
}

export interface DeleteBasket {
    type: typeof DELETE_BASKET,
    payload: number,
    [key: string]: unknown
}

export type ProductActionType = CreateProduct| EditProduct | DeleteProduct|BasketProduct|IncrementQuantity|DeleteBasket;