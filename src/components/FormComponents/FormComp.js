import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios';

function FormComp() {

    const [ngoName, setNgoName] = useState('');
    const [projectName, setProjectName] = useState('');
    const [desc, setDesc] = useState('');
	const [fund, setFund] = useState('');
	const [date, setDate] = useState('');

	const handleSubmit = (e) => {e.preventDefault();

    const objt = { ngoName, projectName, desc, fund, date };

	axios
		.post(
			'https://sheet.best/api/sheets/e2ef29e2-d851-412c-888d-c4643ad77a94',
			objt
			)
		.then((response) => {
			console.log(response);
		});
    alert("Congrats, your Project has been Submitted and will be listed after Verification in 24 hours.!");

	};

    return (
        <div>

            <Form>

            
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNGOName">
                    <Form.Label>NGO Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter NGO Name" onChange={(e) => setNgoName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridProjectName">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Project Name" onChange={(e) => setProjectName(e.target.value)} />
                    </Form.Group>
                </Row>

                    <Form.Group className = "mb-3" controlId = "formGridAddress" >
                            <Form.Label > Description of Project</Form.Label> 
                            <Form.Control as = "textarea" placeholder="Describe your Project" rows = { 3 }  onChange={(e) => setDesc(e.target.value)} /> 
                    </Form.Group> 

                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNGOName">
                    <Form.Label>Project Funding :</Form.Label>
                    <Form.Control type="text" placeholder="Amount in USD"  onChange={(e) => setFund(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId = "formDate" >
                        <Form.Label > Project End Date </Form.Label> 
                        <Form.Control type = "date" placeholder = "Enter end date"  onChange={(e) => setDate(e.target.value)} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button className = "btn-sub" variant = "dark" active onClick={handleSubmit}>Submit Project </Button>
            </Form>  
        </div>
    )
}
export default FormComp