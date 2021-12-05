import React from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormComp() {
    return (
        <div>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNGOName">
                    <Form.Label>NGO Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter NGO Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridProjectName">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Project Name" />
                    </Form.Group>
                </Row>

                    <Form.Group className = "mb-3" controlId = "formGridAddress" >
                            <Form.Label > Description of Project</Form.Label> 
                            <Form.Control as = "textarea" placeholder="Describe your Project" rows = { 3 }/> 
                    </Form.Group> 

                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNGOName">
                    <Form.Label>Project Funding :</Form.Label>
                    <Form.Control type="text" placeholder="Amount in USD" />
                    </Form.Group>

                    <Form.Group as={Col} controlId = "formDate" >
                        <Form.Label > Project End Date < /Form.Label> 
                        <Form.Control type = "date" placeholder = "Enter end date" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button className = "btn-sub" variant = "dark" active >Submit Project </Button>
            </Form>
        </div>
    )
}

export default FormComp
