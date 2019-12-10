import React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {CartProduct} from "../../Interfaces";
import {Provider} from "react-redux";
import ShoppingCart from "./ShoppingCart";
import ShoppingCartItem from "../shopping-cart-item/ShoppingCartItem";


const testCartProduct: CartProduct = {
    id: 'testCartProduct',
    name: 'testCartProduct',
    price: 1000
};


const initialStoreState = {
    cartItems: [testCartProduct]
};

const mockStore = configureStore();
let store, wrapper;

describe('ShoppingCart Component', () => {
    beforeEach(() => {
        store = mockStore(initialStoreState);
        wrapper = mount(<Provider store={store}><ShoppingCart/></Provider>);
    });

    it('should render without throwing an error', () => {
        expect(wrapper.find('.shopping-cart').length).toEqual(1);
    });

    it('should display one product in the cart when there is one product', () => {
        expect(wrapper.contains(<ShoppingCartItem key={testCartProduct.id} product={testCartProduct}
                                                  amount={1}/>)).toBeTruthy();
    });

    it('should display total value of products in cart in dollars', () => {
        const storeState = {
            cartItems: [testCartProduct, testCartProduct]
        };
        store = mockStore(storeState);
        const testValue = testCartProduct.price + testCartProduct.price;

        wrapper = mount(<Provider store={store}><ShoppingCart/></Provider>);

        expect(wrapper.contains(<div className="total-value">{testValue / 100 + "$"}</div>)).toBeTruthy();
    });

    it('should display a message when the cart is empty', () => {
        const storeState = {
            cartItems: []
        };
        store = mockStore(storeState);

        wrapper = mount(<Provider store={store}><ShoppingCart/></Provider>);

        expect(wrapper.contains(<div>You have no items in your cart</div>)).toBeTruthy();
    })

});