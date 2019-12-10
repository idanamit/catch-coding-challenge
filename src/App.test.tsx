import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import {getByTestId, render, cleanup} from '@testing-library/react'
import {toContainElement} from '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import {act} from "react-dom/test-utils";

expect.extend({toContainElement});

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

/*it('should contain all the needed components', async () => {
    const mockResult = {metadata: 'mock metadata', results: 'mock results'};
    jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(mockResult)
        })
    );

    await act(async () => {
        const {container, getByTestId} = render(<App/>);

        const productListHeadingElement = getByTestId('product-list-heading');
    });

    expect(true).toBeTruthy();
});*/
