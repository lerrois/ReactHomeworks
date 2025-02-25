import React, {useEffect} from 'react';
import DeleteButton from "./DeleteButton.jsx";
import {useContext} from "react";
import CountryItem from "./CountryItem.jsx";
import CountriesContext from "../contexts/CountriesContext.jsx";

function CountriesListComponent(props) {
    const countries = useContext(CountriesContext);
console.log(countries)
console.log(countries.cntrs)
    return countries.cntrs.length ? (
        <>
            <ul>
                {countries.cntrs.map((country) => (
                    <div key={country.id}>
                        <CountryItem
                            item={country}
                            flag={country.flag}
                            name={country.name.official}
                        />
                        <DeleteButton
                            id={country.id}
                        />
                    </div>
                ))}
            </ul>
        </>
) : null;

}

export default CountriesListComponent;