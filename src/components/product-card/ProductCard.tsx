import React from 'react';
import {Product} from "../../Interfaces";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './ProductCard.scss';

const ProductCard: React.FC<{
    product: Product
}> = (props) => {
    return (
        <div className="card-container">
            <Card>
                <Card.Img variant="top" src={props.product.imageUrl}/>
                <Card.Body>
                    <Card.Title className="title-text">{props.product.name}</Card.Title>
                    <div className="bottom-text-container">
                        {props.product.retailPrice !== 0 &&
                        <div className="strikethrough-text">
                            <Card.Text>{props.product.retailPrice/100 + "$"}</Card.Text>
                        </div>
                        }
                        <Card.Text className="sale-price-text">{props.product.salePrice/100 + "$"}</Card.Text>
                        <div className="button-container">
                            {props.product.quantityAvailable > 0
                                ? <Button variant="outline-primary" block>Add to Cart</Button>
                                : <Button variant="outline-secondary" block disabled>Sold Out</Button>
                            }
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
};

export default ProductCard;
