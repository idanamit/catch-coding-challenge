import React from 'react';
import {Product} from "../../Interfaces";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './ProductCard.scss';
import {useDispatch} from "react-redux";
import {constants} from "../../Constants";

const ProductCard: React.FC<{
    product: Product
}> = (props) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch({
            type: constants.actions.ADD_TO_CART,
            payload: props.product
        })
    };

    return (
        <div className="card-container">
            <Card>
                <Card.Img variant="top" src={props.product.imageUrl}/>
                <Card.Body>
                    <Card.Title className="title-text">{props.product.name}</Card.Title>
                    {props.product.retailPrice !== 0 &&
                    <div className="strikethrough-text">
                        <Card.Text>{props.product.retailPrice / 100 + "$"}</Card.Text>
                    </div>
                    }
                    <Card.Text className="sale-price-text">{props.product.salePrice / 100 + "$"}</Card.Text>
                    <div className="button-container">
                        {props.product.quantityAvailable > 0
                            ? <Button variant="outline-primary" block onClick={addToCart}>Add to Cart</Button>
                            : <Button variant="outline-secondary" block disabled>Sold Out</Button>
                        }
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
};

export default ProductCard;
