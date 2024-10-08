import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';

const DishDetails = ({ dish }) => {

    const renderDish = (dish) => {
        return (
            <div className="col-12 col-md-2 m-1">
                <Card>
                    <CardImg width="100%" top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    };

    const renderComments = (comments) => {
        if(comments) {
            return (
                <div className="col-12 col-md-2 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: '2-digit'
                                    }).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        } else {
            return <div></div>;
        }
    };

    if (dish) {
        return (
            <div className="container">
                <div className="row">
                    {renderDish(dish)}
                    {renderComments(dish.comments)}
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default DishDetails;
