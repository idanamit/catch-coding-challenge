import React from "react";
import {Product} from "../../Interfaces";
import ProductCard from "../product-card/ProductCard";
import CardDeck from "react-bootstrap/CardDeck";

const ProductCardList: React.FC<{
    results: Product[];
}> = (props) => {
    return (
        <CardDeck>
            {props.results.map((product) => {
                return <ProductCard product={product}/>
            })}
        </CardDeck>

    )
};

export default ProductCardList;
