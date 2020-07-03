import React from "react";
import {Card,Button} from "react-bootstrap";

export default function Recipe({title,calories,image}) {
    return(
        <div>
            <Card border="dark" bg="primary" style={{ width: '30rem' }} className="text-center ">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {calories}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}