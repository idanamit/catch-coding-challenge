import React from 'react';
import './ProductListHeading.scss';

const ProductListHeading: React.FC<{
    query: string;
    total: number;
    currPage: number;
    pages: number;
}> = (props) => {
    return (
        <div className="product-list-heading">
            <div className="query-text">
                Showing results for "{props.query}"
            </div>
            <div className="pages-text">
                Page {props.currPage} of {props.pages} pages
            </div>
            <div className="count-text">
                Showing "count" items out of {props.total}
            </div>
        </div>
    )
};

export default ProductListHeading;
