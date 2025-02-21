import React from 'react';
import {Link, useSearchParams} from "react-router-dom";

function MoreButtonComponent({thename, currentTranslation, id}) {

    const handleMoreButton = (e) => {
        e.preventDefault();
    }
    const name = thename
    //     ? thename : "";
    // console.log(thename)
    return (
        <div>
            <Link to={`/country/${id}?translation=${currentTranslation}`}>
                <button type="submit">Read more about {name}</button>
            </Link>
        </div>
    );
}

export default MoreButtonComponent;