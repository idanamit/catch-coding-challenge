import React from 'react';
import {shallow} from 'enzyme'

import ProductListHeading from "./ProductListHeading";
import {Metadata} from "../../Interfaces";


const testMetadata: Metadata = {
    query: "testQuery",
    total: 100,
    page: 2,
    pages: 5
};

const testCountItems = 10;

describe('ProductListHeading Component', () => {
    it('should render the component wrapper element', () => {
        const wrapper = shallow(<ProductListHeading metadata={testMetadata} countItems={testCountItems}/>);

        expect(wrapper.hasClass("product-list-heading")).toBeTruthy();
    });

    it('should render the metadata in the component', () => {
        const wrapper = shallow(<ProductListHeading metadata={testMetadata} countItems={testCountItems}/>);

        expect(wrapper.contains(<div className="query-text">Showing results for
            "{testMetadata.query}"</div>)).toBeTruthy();

        expect(wrapper.contains(<div className="pages-text">
            Page {testMetadata.page} of {testMetadata.pages} pages</div>)).toBeTruthy();

        expect(wrapper.contains(<div className="count-text">
            Showing {testCountItems} items out of {testMetadata.total}</div>)).toBeTruthy();
    })
});