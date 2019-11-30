import {constants} from "../Constants";
import {Product} from "../Interfaces";

const initialState = {
    metadata: {},
    results: [],
    cartItems: Array<Product>()
};

function rootReducer(state = initialState, action) {
    if (action.type === constants.actions.ADD_TO_CART) {
        return Object.assign({}, state, {
            cartItems: state.cartItems.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;
