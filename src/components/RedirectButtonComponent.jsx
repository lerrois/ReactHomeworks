import React from 'react';
import { Link } from "react-router-dom";

function RedirectButtonComponent(props) {
    return (
        <button><Link to={`/countries`}>Countries</Link></button>
    );
}

export default RedirectButtonComponent;