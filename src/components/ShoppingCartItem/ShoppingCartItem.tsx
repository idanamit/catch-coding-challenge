import React from "react";
import {CartProduct} from "../../Interfaces";


const ShoppingCartItem: React.FC<{
    product: CartProduct;
    amount: number
}> = (props) => {
    return (
        <div className="cart-product-container">
            <div className="cart-product-amount">{props.amount}x</div>
            <div className="cart-product-name">{props.product.name}</div>
            <div className="cart-product-price">{props.product.price / 100 + "$"}</div>
            <button className="add-amount-button">+</button>
        </div>
    )
};


export default ShoppingCartItem;
