import React from 'react';
import './ProductListHeading.scss';
import {Metadata} from '../../Interfaces';

const ProductListHeading: React.FC<{
    metadata: Metadata
}> = (props) => {
    return (
        <div className="product-list-heading">
            <div className="query-text">
                Showing results for "{props.metadata.query}"
            </div>
            <div className="pages-text">
                Page {props.metadata.page} of {props.metadata.pages} pages
            </div>
            <div className="count-text">
                Showing "count" items out of {props.metadata.total}
            </div>
        </div>
    )
};

export default ProductListHeading;
