import React from 'react';
import App from './App';
import '@testing-library/jest-dom/extend-expect'
import {mount} from "enzyme";
import ProductListHeading from "./components/product-list-heading/ProductListHeading";
import {Metadata, Product} from "./Interfaces";

let wrapper;

const testMetadata: Metadata = {
    query: "testQuery",
    total: 100,
    page: 2,
    pages: 5
};

const testProduct: Product = {
    id: 'testProductId',
    name: 'testProductName',
    salePrice: 1000,
    retailPrice: 2000,
    imageUrl: 'testProductUrl',
    quantityAvailable: 20
};

describe('App Component', () => {
    beforeEach(() => {
        wrapper = mount(<App></App>);
    });

    it('should render without throwing an error', () => {
        expect(wrapper.find('.app').length).toEqual(1);
    });

    xit('should contain all the needed components', async () => {
        const mockResult = {metadata: testMetadata, results: [testProduct]};
        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockResult)
            })
        );

        expect(wrapper.contains(<ProductListHeading metadata={mockResult.metadata}
                                                    countItems={mockResult.results.length}/>)).toBeTruthy();
    });
});