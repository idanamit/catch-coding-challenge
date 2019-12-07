import React, {useState} from 'react';
import {CartProduct, Product} from "../../Interfaces";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './ProductCard.scss';
import {useDispatch} from "react-redux";
import {constants} from "../../Constants";

const ProductCard: React.FC<{
    product: Product
}> = (props) => {
    const dispatch = useDispatch();
    const [isMouseHover, setMouseHover] = useState(false);

    const mouseEnter = () => {
        setMouseHover(true);
    };

    const mouseLeave = () => {
        setMouseHover(false);
    };

    const addToCart = () => {
        const cartProduct: CartProduct = {
            id: props.product.id,
            name: props.product.name,
            price: props.product.salePrice
        };
        dispatch({
            type: constants.actions.ADD_TO_CART,
            payload: cartProduct
        })
    };

    return (
        <div className="card-container" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <Card>
                <Card.Img variant="top" src={props.product.imageUrl}/>
                <Card.Body>
                    <div className="button-container">
                        {props.product.quantityAvailable > 0
                            ? isMouseHover ?
                                <Button variant="outline-primary" block onClick={addToCart}>Add to Cart</Button> : null
                            : <Button variant="outline-secondary" block disabled>Sold Out</Button>
                        }
                    </div>
                    <Card.Title className="title-text">{props.product.name}</Card.Title>
                    {props.product.retailPrice !== 0 &&
                    <div className="strikethrough-text">
                        <Card.Text>{props.product.retailPrice / 100 + "$"}</Card.Text>
                    </div>
                    }
                    <Card.Text className="sale-price-text">{props.product.salePrice / 100 + "$"}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};

export default ProductCard;
