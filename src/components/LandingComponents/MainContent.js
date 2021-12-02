import React from "react"
import Button from "react-bootstrap/Button";
import './MainContent.css';

function MainContent() {
    return (

           <div className="main">
            <h1>Matic Hackathon </h1>
            <h2> What is Quadratic Funding ? Overall Concept </h2>
            <ol>
                <li>It is a capital allocation mechanism that empowers a community to demonstrate their preference for a project by amplifying each donation so that a project with a large number of backers will benefit the most.</li>
                <li>The current crypto-ecosystem is a playground for innovation, and one of the most interesting socio-economic experiments currently being conducted is <b>Quadratic Funding</b></li>

                 <li><a href="https://arxiv.org/pdf/1809.06421.pdf">Quadratic Funding</a>is the mathematically optimal way to fund public goods in a democratic community. It amplifies the donations made by a large community over the contributions made by a small group with big pockets.</li>
            </ol>
            <h2> Hackthon Use Case-1: NGO Project Funding </h2>
            <ol> 
              <li> Many NGOs get large donations and allocate funds basis understanding of core management teams. This practice many times may lead to inefficient allocation of funds to projects and some time also create vested interest based funding of projects.</li>
              <li> NGO project allocation to funds ideally should be voted by beneficiary of such projects</li>
            </ol>
            <div className="button-landing">
              <Button variant="dark" active>Support Project</Button>
              <Button variant="dark" active>List Your Project</Button>
            </div>

        </div>
        /* <div>
            <h1>Polygon Landing Page.</h1>
            <h2>Reasons I'm excited to learn React</h2>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div> */
    )
}
export default MainContent