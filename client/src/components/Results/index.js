import React from "react";
import {Row, Col, Card, Button} from "react-bootstrap";
import API from "../../utils/API";

export const Result = ({book}) =>{

    const handleSave = () => {
        console.log(book)
        API.create( book );
    }

    const handleDelete = () => {
        API.delete(book._id)
        .then(()=>window.location.reload())
    }

    return(
        <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Title>{book.title}</Card.Title>
                        <p>Authors: {book.authors.join(", ")}</p>
                    </Col>
                    <Col className="text-right">
                        <Button href={book.link}>View</Button>
                        {book._id ? 
                        (<Button onClick={handleDelete} className="ml-2">Delete</Button>
                        ) : (<Button onClick={handleSave} className="ml-2">Save</Button>
                        )
                        }
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

    const data = [{
        authors: "test",
    description: "test",
    image: "test",
    link: "test",
    title: "test"}]
    
    return(
    <Card>
        <Card.Body>
            <Card.Title>
            Results
            </Card.Title>
            {results.map(item => <Result key={item.googlebookId} book={item}/>)}
        </Card.Body>
    </Card>
    );
}

export default Results;