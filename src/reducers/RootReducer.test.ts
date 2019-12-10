import rootReducer from "./RootReducer";
import {CartProduct} from "../Interfaces";

const testCartProduct: CartProduct = {
    id: 'testCartProduct',
    name: 'testCartProduct',
    price: 1000
};

const initialState = {
    metadata: {},
    results: [],
    cartItems: Array<CartProduct>()
};

describe('RootReducer', () => {
    it('should return the initial state if no action has been sent', () => {

        const testAction = {
            type: "undefined"
        };

        let testState = rootReducer(undefined, testAction);

        expect(testState).toEqual(initialState);
    });

    it('should add product to cart items on ADD_TO_CART action', () => {
        const addToCartState = {
            metadata: {},
            results: [],
            cartItems: [testCartProduct]
        };

        const addToCartAction = {
            type: "ADD_TO_CART",
            payload: testCartProduct
        };

        let testState = rootReducer(undefined, addToCartAction);

        expect(testState).toEqual(addToCartState);
    });

    it('should remove product from cart items on REMOVE_PRODUCT action', () => {
        const removeProductState = {
            metadata: {},
            results: [],
            cartItems: [testCartProduct]
        };

        const removeProductAction = {
            type: "REMOVE_PRODUCT",
            payload: testCartProduct
        };

        let testState = rootReducer(removeProductState, removeProductAction);

        expect(testState).toEqual(initialState);
    });

    it('should decrease product amount from cart items on DECREASE_PRODUCT_AMOUNT action', () => {
        const beforeDecreaseProductAmount = {
            metadata: {},
            results: [],
            cartItems: [testCartProduct, testCartProduct]
        };

        const decreaseProductAmountAction = {
            type: "DECREASE_PRODUCT_AMOUNT",
            payload: testCartProduct
        };

        const afterDecreaseProductAmount = beforeDecreaseProductAmount;
        afterDecreaseProductAmount.cartItems.splice(0, 1);

        let testState = rootReducer(beforeDecreaseProductAmount, decreaseProductAmountAction);

        expect(testState).toEqual(afterDecreaseProductAmount);
    });
});