import React from 'react';
import DeleteButton from "./DeleteButton.jsx";
import { Link } from "react-router-dom";
function CountryItem({keydata, item, name, flag}) {

    const id = item.id;

    return (
        <>
            <span>
               {keydata}
            </span>
            <span>
                {flag}
            </span>
            <span>
                <Link to={`/country/${id}`}>{name}</Link>
            </span>
        </>
    );

}

export default CountryItem;