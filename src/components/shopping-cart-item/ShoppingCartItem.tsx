import React from "react";
import {CartProduct} from "../../Interfaces";
import './ShoppingCartItem.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {constants} from "../../Constants";


const ShoppingCartItem: React.FC<{
    product: CartProduct;
    amount: number
}> = (props) => {
    const dispatch = useDispatch();

    const changeAmount = (isIncrease) => {
        if (isIncrease) {
          dispatch({
              type: constants.actions.ADD_TO_CART,
              payload: props.product
          })
        }
        else {
            dispatch({
                type: constants.actions.DECREASE_PRODUCT_AMOUNT,
                payload: props.product
            })
        }
    };

    const removeProduct = () => {
        dispatch({
            type: constants.actions.REMOVE_PRODUCT,
            payload: props.product
        })
    };

    return (
        <div className="cart-product-container">
            <div className='cart-product-information'>
                <div className="cart-product-amount">{props.amount}x</div>
                <div className="cart-product-name">{props.product.name}</div>
                <div className="cart-product-price">{props.product.price / 100 + "$"}</div>
            </div>
            <div className='cart-product-buttons-container'>
                <button className="cart-product-button btn" onClick={() => {changeAmount(true)}}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
                <button className="cart-product-button btn" onClick={() => {changeAmount(false)}}>
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
                <button className="cart-product-button btn" onClick={removeProduct}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </div>
        </div>
    )
};


export default ShoppingCartItem;
