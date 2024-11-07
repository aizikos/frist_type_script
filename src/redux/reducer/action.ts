import { ADD_Product, Basket, BASKET_PRODUCT, BasketProduct, CreateProduct, DELETE_BASKET, DELETE_Product, DeleteBasket, DeleteProduct, EDIT_Product, EditProduct, INCREMENT_QUANTITY, IncrementQuantity, MINUS_QUANTITY, MinusQuantity, Product } from "../../types/types";

export const createProduct = (product:Product): CreateProduct => ({
    type: ADD_Product,
    payload: product,
})
export const deleteProduct = (id:number): DeleteProduct => ({
    type: DELETE_Product,
    payload: id,
})
export const editProduct = (product:Product): EditProduct => ({
    type: EDIT_Product,
    payload: product,
})
export const basketProduct = (basket:Basket): BasketProduct => ({
    type: BASKET_PRODUCT,
    payload: basket,
})

export const IncrementQuently = (basket:Basket): IncrementQuantity => ({
    type: INCREMENT_QUANTITY,
    payload: basket,
})

export const deleteBasket = (id:number): DeleteBasket => ({
    type: DELETE_BASKET,
    payload: id,
})

export const MinusQuantly = (basket:Basket): MinusQuantity => ({
    type: MINUS_QUANTITY,
    payload: basket,
})