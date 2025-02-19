import React, {useContext, useEffect, useState} from 'react';
import Select1 from "./Select1.jsx";
import Select2 from "./Select2.jsx";
import MoreButtonComponent from "./MoreButtonComponent.jsx";
import CountriesContext from "../contexts/CountriesContext.jsx";
import services from "../services/services.js";

function CountryFormComponent(props) {
    // const [countries, setCountries] = useState([]);
    // const getCountries = async () => {
    //     try {
    //         const response = await services.get();
    //         console.log(response)
    //         setCountries(response)
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    // useEffect(() => {
    //     getCountries();
    // }, []);

    // const dataArray = useContext(CountriesContext);
    // console.log(dataArray);
    return (
        <form className="countryFormContainer">
            <title>Country Form Component</title>
            <Select1/>
            <Select2/>
            <MoreButtonComponent />
        </form>
    );
}


export default CountryFormComponent;