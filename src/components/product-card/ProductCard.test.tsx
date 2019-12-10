import React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';

import ProductCard from "./ProductCard";
import {Product} from "../../Interfaces";
import Card from "react-bootstrap/Card";
import {Provider} from "react-redux";
import Button from "react-bootstrap/Button";

const testProduct: Product = {
    id: 'testProductId',
    name: 'testProductName',
    salePrice: 1000,
    retailPrice: 2000,
    imageUrl: 'testProductUrl',
    quantityAvailable: 20
};

const initialStoreState = {
    cartItems: []
};

const mockStore = configureStore();
let store, wrapper;

describe('ProductCard Component', () => {
    beforeEach(() => {
        store = mockStore(initialStoreState);
        wrapper = mount(<Provider store={store}><ProductCard product={testProduct}/></Provider>);
    });

    it('should render without throwing an error', () => {
        expect(wrapper.find(Card).length).toEqual(1);
    });

    it('should render the correct values received from props', () => {
        expect(wrapper.contains(<Card.Img variant="top" src={testProduct.imageUrl}/>)).toBeTruthy();
        expect(wrapper.contains(<Card.Title className="title-text">{testProduct.name}</Card.Title>)).toBeTruthy();
        expect(wrapper.contains(<div className="strikethrough-text">
            <Card.Text>{testProduct.retailPrice / 100 + "$"}</Card.Text>
        </div>)).toBeTruthy();
        expect(wrapper.contains(<Card.Text
            className="sale-price-text">{testProduct.salePrice / 100 + "$"}</Card.Text>)).toBeTruthy();
    });

    it('should dispatch ADD_TO_CART action on button click', () => {
        const testActionCardProduct = {
            id: testProduct.id,
            name: testProduct.name,
            price: testProduct.salePrice
        };

        const wantedAction = {
            type: "ADD_TO_CART",
            payload: testActionCardProduct
        };

        wrapper.simulate('mouseenter');
        wrapper.find('button').simulate('click');
        const actions = store.getActions();

        expect(actions[0]).toEqual(wantedAction);
    });

    it('should render different values according to received props', () => {
        let outOfStockTestProduct = testProduct;
        outOfStockTestProduct.quantityAvailable = 0;

        wrapper = mount(<Provider store={store}><ProductCard product={outOfStockTestProduct}/></Provider>);

        expect(wrapper.contains(<Button variant="outline-secondary" block disabled>Sold Out</Button>)).toBeTruthy();
    });
});