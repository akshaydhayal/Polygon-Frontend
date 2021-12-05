import React from 'react'
import { useNavigate, Link } from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    return ( 
        <div>
            <h1>Home Page </h1> 
            <Link to="/product">Product link</Link>
            <button onClick = {() => {navigate("/product") }} >
            Change to Product Page </button> 
        </div>
    )
}
export default Home