import React from "react";
import {Row, Col, Card, Button} from "react-bootstrap";

export const Result = ({book}) =>{
    return(
        <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Title>{book.title}</Card.Title>
                        <p>Authors: {book.authors.join(", ")}</p>
                    </Col>
                    <Col className="text-right">
                        <Button>View</Button>
                        <Button href={book.link} className="ml-2">Save</Button>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md="4">
                        <img src={book.image}/>
                    </Col>
                    <Col>
                    <Card.Text>{book.description}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

function Results({results}){
    return(
    <Card>
        <Card.Body>
            <Card.Title>
            Results Here
            </Card.Title>
            {results.map(item => <Result key={item.googlebookId} book={item}/>)}
        </Card.Body>
    </Card>
    );
}

export default Results;