import React, {useContext} from 'react';
import CountriesListComponent from "../components/CountriesListComponent.jsx";
import Header from "../pages/Header.jsx";
import CountriesContext from "../contexts/CountriesContext.jsx";

function Countries(props) {
    return (
        <div>
            <Header />
            <CountriesListComponent />

        </div>
    );
}

export default Countries;