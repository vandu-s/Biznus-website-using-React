import * as types from '../types/type';
const initialState = {
    product:[],
    cartProduct:[{price:23,name:'vandana'}]


}

export const ProductReducer= (state = initialState, { type, payload }) => {
    switch (type) {

    case types.Add_PRODUCT:
        return { ...state,cartProduct:[...state.cartProduct, payload] }

    default:
        return state
    }
}
