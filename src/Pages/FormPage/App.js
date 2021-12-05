import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from '../../components/LandingComponents/Header';
import Footer from '../../components/LandingComponents/Footer';
import '../../components/LandingComponents/Footer.css';
import './App.css';
import FormComp from "../../components/FormComponents/FormComp";

function FormApp() {
    return ( 
    < div >
        <Header />
        < h1 > List your Project </h1> 
        <FormComp/>
        <div className="form-footer">
            <Footer/>
        </div>
    </div >
    );
}
export default FormApp;