import React, {useRef} from "react";
import {Card, Form, Col, Button} from "react-bootstrap";
import googleBooksApi from "../../utils/googleBooksApi";

function SearchForm(){
    const searchInput = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        googleBooksApi.searchBooks(searchInput.current.value)
        .then(results => {console.log(results)})
    }
    return(
        <Card>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label column lg={2}>
                            Search
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" ref={searchInput}/>
                        </Col>
                        <Form.Row>
                            <Button onClick={handleSubmit}>Search</Button>
                        </Form.Row>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default SearchForm;