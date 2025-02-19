import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import services from "../services/services.js";

export default function Select1() {
    const [sort, setSort] = useState(null);
    const [countries, setCountries] = useState([]);
    const [langs, setLangs] = useState([]);

    const handleSelect1 = (e) => {
        const langsData = countries.filter((item) => {
            return e.target.value === item.capital[0]
        })[0].languages
        setLangs(langsData);
    }
    const getCountries = async () => {
        try {
            const response = await services.get();
            setCountries(response)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCountries();
    }, []);

    return (

        <>
            <select onChange={handleSelect1} defaultValue={sort}>
                {countries.map((country) => (
                    <option key={country.id} value={country.capital[0]}>{country.flag} {country.capital[0]}</option>))}
            </select>

            <select>
                {Object.entries(langs).map(([key, lang]) => <option key={key} value={lang}>{key}</option>)}
            </select>

        </>
    );
}