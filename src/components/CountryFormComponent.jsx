import React, {useContext, useEffect, useState} from 'react';
import Select1 from "./Select1.jsx";
import Select2 from "./Select2.jsx";
import MoreButtonComponent from "./MoreButtonComponent.jsx";
import CountriesContext from "../contexts/CountriesContext.jsx";
import services from "../services/services.js";

function CountryFormComponent(props) {
    const [currentTranslation, setCurrentTranslation] = useState(null);
    const [countries, setCountries] = useState([]);
    const [currentCountry, setCurrentCountry] = useState([]);

    const handleSelect1 = (e) => {
        const countryEntity = countries.filter((item) => {
            return e.target.value === item.capital[0]
        })[0];
        setCurrentCountry(countryEntity);
    }
    const handleSelectTranslation = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setCurrentTranslation(e.target.value)
    }
    const getCountries = async () => {
        try {
            const response = await services.get();
            setCountries(response)
            const countryEntity = response.filter((item) => {
                return "Kyiv" === item.capital[0]
            })[0];
            setCurrentCountry(countryEntity);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCountries();
    }, []);
    return (
        <form className="countryFormContainer">
            <title>Country Form Component</title>
            <Select1
                handleSelect1={handleSelect1}
                countries={countries}
                currentCountry={currentCountry}
            />
            <Select2
                translations={currentCountry.translations}
                handleSelectTranslation={handleSelectTranslation}
            />
            <MoreButtonComponent
                currentTranslation={currentTranslation}
                id={currentCountry.id}
                thename={currentCountry.name ? currentCountry.name.common : ""}
            />
        </form>
    );
}


export default CountryFormComponent;