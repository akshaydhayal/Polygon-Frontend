import React from 'react';
import './App.css';

import Header from "../../components/LandingComponents/Header.js"
import MainContent from "../../components/LandingComponents/MainContent.js"
import Footer from "../../components/LandingComponents/Footer.js"

function HomeApp() {
    return (
         < div >
        <Header />
        <MainContent />
        <Footer/>
        </div>
        )
    }
    export default HomeApp;