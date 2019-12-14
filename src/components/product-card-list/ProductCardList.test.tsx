import React from 'react';
import {shallow} from 'enzyme';

import ProductCardList from './ProductCardList';
import CardDeck from "react-bootstrap/CardDeck";
import {Product} from "../../Interfaces";
import ProductCard from "../product-card/ProductCard";

const testProduct: Product = {
    id: 'testProductId',
    name: 'testProductName',
    salePrice: 1000,
    retailPrice: 2000,
    imageUrl: 'testProductUrl',
    quantityAvailable: 20
};

describe('ProductCardList Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<ProductCardList results={[]}/>).contains(<CardDeck></CardDeck>)).toBeTruthy();
    });

    it('should contain a product card component when have one product', () => {
        const testProductArray = [testProduct];

        const wrapper = shallow(<ProductCardList results={testProductArray}/>);

        expect(wrapper.contains(<ProductCard product={testProduct}/>)).toBeTruthy();
    });

    it('should contains multiple product cards when have more than one', () => {
        const testProductArray = [testProduct, testProduct, testProduct];

        const wrapper = shallow(<ProductCardList results={testProductArray}/>);

        expect(wrapper.find(ProductCard).length).toEqual(3);
    })
});