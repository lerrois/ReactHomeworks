import React from 'react';
import {Link, useSearchParams} from "react-router-dom";

function MoreButtonComponent({thename, currentTranslation, id}) {
    if (currentTranslation === null) {
        currentTranslation = "ces"
    }

    const name = thename
    return (
        <div>
            <Link to={`/country/${id}?translation=${currentTranslation}`}>
                <button type="submit">Read more about {name}</button>
            </Link>
        </div>
    );
}

export default MoreButtonComponent;