import {constants} from "../Constants";
import {CartProduct} from "../Interfaces";
import {concat, filter, findIndex} from "lodash";

const initialState = {
    metadata: {},
    results: [],
    cartItems: Array<CartProduct>()
};

function rootReducer(state = initialState, action) {
    if (action.type === constants.actions.ADD_TO_CART) {
        return Object.assign(state, {
            cartItems: concat(state.cartItems, action.payload)
        });

    } else if (action.type === constants.actions.REMOVE_PRODUCT) {
        return Object.assign(state, {
            cartItems: filter(state.cartItems, (product) => {
                return product.id !== action.payload.id;
            })
        });

    } else if (action.type === constants.actions.DECREASE_PRODUCT_AMOUNT) {
        let productIndex = findIndex(state.cartItems, (product) => {
            return product.id === action.payload.id;
        });

        return Object.assign(state, {
            cartItems: state.cartItems.filter((value, index) => {
                return productIndex !== index;
            })
        });
    }
    return state;
}

export default rootReducer;
