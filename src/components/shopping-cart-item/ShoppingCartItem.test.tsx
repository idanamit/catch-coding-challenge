import React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';

import {CartProduct} from "../../Interfaces";
import {Provider} from "react-redux";
import ShoppingCartItem from "./ShoppingCartItem";

const testCartProduct: CartProduct = {
    id: 'testCartProduct',
    name: 'testCartProduct',
    price: 1000
};

const testAmount = 1;

const mockStore = configureStore();
let store, wrapper;

describe('ShoppingCartItem Component', () => {
    beforeEach(() => {
        store = mockStore({});
        wrapper = mount(<Provider store={store}><ShoppingCartItem amount={testAmount}
                                                                  product={testCartProduct}/></Provider>);
    });

    it('should render without throwing an error', () => {
        expect(wrapper.find(".cart-product-container").length).toEqual(1);
    });

    it('should render the correct values received from props', () => {
        expect(wrapper.contains(<div className="cart-product-amount">{testAmount}x</div>)).toBeTruthy();
        expect(wrapper.contains(<div className="cart-product-name">{testCartProduct.name}</div>)).toBeTruthy();
        expect(wrapper.contains(<div
            className="cart-product-price">{testCartProduct.price / 100 + "$"}</div>)).toBeTruthy();
    });

    it('should dispatch REMOVE_PRODUCT action when clicking on remove product button', () => {
        const testAction = {
            type: "REMOVE_PRODUCT",
            payload: testCartProduct
        };

        wrapper.find('button').last().simulate('click');
        const actions = store.getActions();

        expect(actions[0]).toEqual(testAction);
    });

    it('should dispatch ADD_TO_CART action when clicking on increase amount button', () => {
        const testAction = {
            type: "ADD_TO_CART",
            payload: testCartProduct
        };

        wrapper.find('button').first().simulate('click');
        const actions = store.getActions();

        expect(actions[0]).toEqual(testAction);
    });

    it('should dispatch DECREASE_PRODUCT_AMOUNT action when clicking on decrease amount button', () => {
        const testAction = {
            type: "DECREASE_PRODUCT_AMOUNT",
            payload: testCartProduct
        };

        wrapper.find('button').at(1).simulate('click');
        const actions = store.getActions();

        expect(actions[0]).toEqual(testAction);
    })
});