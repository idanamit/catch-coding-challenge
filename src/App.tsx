import React from 'react';
import './App.scss';
import useGetProductListData from "./services/getData.service";
import ProductListHeading from "./components/product-list-heading/ProductListHeading";
import ProductCardList from "./components/product-card-list/ProductCardList";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";

const App: React.FC = () => {
    const service = useGetProductListData();

    return (
        <div className="App">
            <div className="page-header">
                Template Project
            </div>
            {service && service.metadata && service.results &&
            <div className="page-content">
                <div className="heading-container">
                    <ProductListHeading metadata={service.metadata}/>
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
