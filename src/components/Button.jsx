import React from 'react';
import service from "../services/services.js";

function Button({clickHandler, name}) {
    return (
        <button onClick={clickHandler}>{name}</button>
    );
}

export default Button;