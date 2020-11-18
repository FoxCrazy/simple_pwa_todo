import React, {useState} from "react";
import PropTypes from "prop-types";
import {Button, InputGroup, FormControl, Container, Row, Col} from 'react-bootstrap';

function AddTodo({onCreate}) {
    const [value, setValue] = useState("");

    function submitHandler(event) {
        event.preventDefault();
        if (value.trim()) {
            onCreate(value);
            setValue("");

        }
    }

    return (

        <form onSubmit={submitHandler}>
            <Container>
                <Row className="float-right">
                    <Col xs={8}>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Text</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"
                                         value={value}
                                         onChange={(event) => setValue(event.target.value)}/>
                        </InputGroup>

                    </Col>
                    <Col xs={4} className="float-right mb-3">
                        <Button variant="outline-success" type="submit">Add new</Button>
                    </Col>

                </Row>
            </Container>
        </form>
    );
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
};
export default AddTodo;
