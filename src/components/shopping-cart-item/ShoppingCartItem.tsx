import React from "react";
import {CartProduct} from "../../Interfaces";
import './ShoppingCartItem.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus, faTrash} from "@fortawesome/free-solid-svg-icons";


const ShoppingCartItem: React.FC<{
    product: CartProduct;
    amount: number
}> = (props) => {
    return (
        <div className="cart-product-container">
            <div className='cart-product-information'>
                <div className="cart-product-amount">{props.amount}x</div>
                <div className="cart-product-name">{props.product.name}</div>
                <div className="cart-product-price">{props.product.price / 100 + "$"}</div>
            </div>
            <div className='cart-product-buttons-container'>
                <button className="cart-product-button btn">
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
                <button className="cart-product-button btn">
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
                <button className="cart-product-button btn">
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </div>
        </div>
    )
};


export default ShoppingCartItem;
