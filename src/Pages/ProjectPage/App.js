import React from 'react'
import Project from "../../components/ProjectComponents/Project";
import Data from "../../data.js";
import "./App.css";
import Header from '../../components/LandingComponents/Header';

function App() {
    return (
        <div>
            <Header/>
            <div className="head-box">
                <h1 className="top-head">All Listed Projects</h1>
                <h3 className="side-head">No of Projects : {Data.length}</h3>
            </div>
            {
                //{let i=0;}
                /* while(i<Data.length){
                    <Project item={Data[i]} />
                } */
                    
            }
   
            <Project item={Data[0]}/>
            <Project item={Data[1]}/>
            <Project item={Data[2]}/>
            <Project item={Data[3]}/>  
        </div>
    )
}

export default App
