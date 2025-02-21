import React, {useContext} from 'react';
import CountryCardComponent from "../components/CountryCardComponent.jsx";
import RedirectButtonComponent from "../components/RedirectButtonComponent.jsx";
import Header from "../pages/Header.jsx";
import DeleteButton from "../components/DeleteButton.jsx";
// import CountriesContext from "../contexts/CountriesContext.jsx";
import { useParams } from 'react-router';
import {Link, useSearchParams} from "react-router-dom";

function Country(props) {
    const [searchParams] = useSearchParams();
    const translation = searchParams.get('translation');

    return (
        <div>
            <Header />
            <CountryCardComponent
                translation={translation}
            />
            <DeleteButton
                // id={params.id}
            />
            <RedirectButtonComponent />
        </div>
    );
}

export default Country;