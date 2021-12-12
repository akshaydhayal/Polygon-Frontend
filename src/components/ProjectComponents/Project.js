//import React from 'react'
import { Button } from 'react-bootstrap';
import "./Project.css";
import React, { useState } from 'react';
// import { init, LockFunds } from './web3client';
import { init, LockFunds } from '../../web3client';


function Project(props) {
    const[lockedfunds,setlockfund]= useState(false);
    const deposit = () =>{
        LockFunds().then((tx) =>{
            console.log(tx);
            setlockfund(true);
        })
        .catch((err) =>{
            console.log(err);
        });
    }

    return (
        <div className="card">
            <div className="ngoLogo">
                <img src={props.item.logoImg } width="150px"/>
            </div>

            <div className="card-details">
                <h3>NGO Name: {props.item.NgoName}</h3>
                <div className="card-meta">
                    <h5>Project : {props.item.projectName}</h5>
                    <h5 className="card-date">End date: {props.item.endDate}  </h5>
                </div>
                <p className="gray">{props.item.description}</p>
                <div className="card-fund">
                    <p>Project Fund: {props.item.projectFund}</p>
                     {!lockedfunds ?
                     (<button onCick ={()=> deposit()}>Support Project</button>)
                     :(<p>Successfully locked funds</p>)}
                    {/* <Button className = "btn-sub" variant = "dark" active >Support Project </Button> */}
                </div>
            </div>
        </div>
    )
}

export default Project