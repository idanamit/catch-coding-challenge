import React from 'react';
import './App.scss';
import useGetProductListData from "./services/GetData.service";
import ProductListHeading from "./components/product-list-heading/ProductListHeading";
import ProductCardList from "./components/product-card-list/ProductCardList";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import HeaderFunctions from "./HeaderFunctions";

const App: React.FC = () => {
    const service = useGetProductListData();
    HeaderFunctions();

    return (
        <div className="app">
            <div className="page-header" id="page-header">
                Catch Coding Challenge
            </div>
            {service && service.metadata && service.results &&
            <div className="page-content">
                <div className="heading-container">
                    <ProductListHeading metadata={service.metadata} countItems={service.results.length}/>
                </div>
                <div className="product-list-container">
                    <ProductCardList results={service.results}/>
                </div>
                <div className="shopping-cart-container">
                    <ShoppingCart/>
                </div>
            </div>
            }
        </div>
    );
};

export default App;
