import React from 'react';
import './App.scss';
import useGetProductListData from "./services/getData.service";
import ProductListHeading from "./components/product-list-heading/ProductListHeading";

const App: React.FC = () => {
    const service = useGetProductListData();

    return (
        <div className="App">
            <div className="page-header">
                Template Project
            </div>
            {service && service.results &&
            <div className="heading-container">
                <ProductListHeading query={service.metadata.query} total={service.metadata.total}
                                    currPage={service.metadata.page} pages={service.metadata.pages}/>
            </div>
            }
        </div>
    );
};

export default App;
