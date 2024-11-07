import { ADD_Product, BASKET_PRODUCT, DELETE_BASKET, DELETE_Product, EDIT_Product, INCREMENT_QUANTITY, MINUS_QUANTITY, ProductActionType, UserState } from '../../types/types'



const initialState: UserState = {
    product: [
        {
            id: 1,
            name: 'banan',
            img: 'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjQwMDBkOWQxODAzNTQzOWIzNTRkMTM0Yzg0NzZhNjFiIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=1f9ff610dcf16db66520535b5486ac743ef10be7766d32b1f02c8cd959b31703',
            price: 900,
            quantly: 1,
            info: 'jdnjnmdjdnncmjdjrjjjrjj'
        }
    ],
    basket: [
        
    ]
}

export const productReducer = (state = initialState, action: ProductActionType): UserState => {
    switch (action.type) {
        case ADD_Product:
            return { ...state, product: [...state.product, action.payload] }
        case EDIT_Product:
            return {
                ...state, product: state.product.map
                    (el => el.id === action.payload.id ? action.payload : el)
            }
        case DELETE_Product:
            return {
                ...state, product: state.product.filter(el => el.id !== action.payload)
            }
        case BASKET_PRODUCT:
            let find_basket = state.basket.find((el) => el.id === action.payload.id)
            let basket_res = state.basket.map((el) => el.id === action.payload.id ? { ...el, quantly: el.quantly + 1 } : el)

            if (find_basket) {
                return { ...state, basket: basket_res }
            } else {
                return { ...state, basket: [...state.basket, action.payload] }
            }
        case INCREMENT_QUANTITY:
            
           return { ...state, basket: state.basket.map((el) => el.id === action.payload.id ? { ...el, quantly: el.quantly + 1 } : el) }
        case DELETE_BASKET:
            return {
                ...state, basket: state.basket.filter(el => el.id !== action.payload)
            }
        case MINUS_QUANTITY:
            return {
                ...state, basket: state.basket.map((el) => el.id === action.payload.id ?
                    { ...el, quantly: el.quantly > 1 ? el.quantly - 1 : 1 } : el)
            }
        default:
            return state
    }
}