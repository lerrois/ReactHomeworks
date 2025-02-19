import React from 'react';
import {Link} from "react-router-dom";


function MoreButtonComponent(props) {

    const handleMoreButton = () => {
    }

    return (
        <div>
            {/*<button onClick={handleMoreButton}>Read more about {country}</button>*/}
            <button onClick={handleMoreButton}>Read more about </button>
            {/*<Link to={`/...?sort=${sort}`}>Todos sort by {sort}</Link>*/}
        </div>
    );
}

export default MoreButtonComponent;