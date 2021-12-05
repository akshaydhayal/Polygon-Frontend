import React from 'react'
import Home from "./Home";
import Error from "./Error";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomeApp from './Pages/LandingPage/App';
import FormApp from './Pages/FormPage/App';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes> 
                    <Route path="/" element={<HomeApp/>} />
                    <Route path="/form" element={<FormApp/>} />
                    <Route path="*" element={<Error/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App
