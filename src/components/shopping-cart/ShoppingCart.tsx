import React from "react";
import {useSelector} from "react-redux";
import './ShoppingCart.scss'
import {countBy, uniqBy} from 'lodash';
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";

const ShoppingCart: React.FC<{}> = () => {

    const productsInCart = useSelector((state: any) => state.cartItems);

    const productsQuantity = countBy(productsInCart, 'id');

    const getProductTotalValue = () => {
        let totalValue = 0;

        productsInCart.forEach((product) => {
            totalValue += product.price;
        });

        return totalValue;
    };

    const getUniqueProductArray = (productArray): Array<any> => {
        return uniqBy(productArray, 'id');
    };

    return (
        <div className="shopping-cart">
            <div className="shopping-cart-title">Shopping Cart</div>
            <div className="shopping-cart-product-list">
                {productsInCart.length === 0 ?
                    <div>You have no items in your cart</div>
                    : <div>
                        {getUniqueProductArray(productsInCart).map((product) => {
                            return <ShoppingCartItem product={product} amount={productsQuantity[product.id]}/>
                        })
                        }
                        <div className="total-container">
                            <div className="total-title">Total</div>
                            <div className="total-value">{getProductTotalValue() / 100 + "$"}</div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
};


export default ShoppingCart;
