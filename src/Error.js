import React from 'react'
import Button from "react-bootstrap/Button";
import {Link } from "react-router-dom";

function Error() {
    return (
        <div>
            <h2> Error 420!, No Page Exist like this.</h2>
            <h3>Go to Home Page</h3>
            <Link to="/">
                <Button variant="dark" active>Home</Button>
            </Link>
        </div>
    )
}

export default Error