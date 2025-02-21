import React, {useContext} from 'react';
import RedirectButtonComponent from "../components/RedirectButtonComponent.jsx";
import Header from "../pages/Header.jsx";
import DeleteButton from "../components/DeleteButton.jsx";
import CountriesContext from "../contexts/CountriesContext.jsx";
import { useParams } from 'react-router';
import {Link, useSearchParams} from "react-router-dom";

function CountryCardComponent({ translation }) {
    const { id } = useParams();
    // const [searchParams] = useSearchParams();
    // console.log(searchParams);
    // const translation = searchParams.get('translation');

    const countries = useContext(CountriesContext);
    const country = countries.cntrs.filter((item) => item.id === id)[0];
    function objectToNestedArray(obj) {
        const result = [];
        for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                result.push({
                    key,
                    children: objectToNestedArray(obj[key]),
                });
            } else {
                result.push({
                    key,
                    value: obj[key],
                });
            }
        }

        return result;
    }

    const nestedArray = objectToNestedArray(country);
    const NestedList = ({ data }) => {
        return (
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        {item.value !== undefined ? (
                            `${item.key}: ${item.value}`
                        ) : (
                            <>
                                {item.key}
                                <NestedList data={item.children} />
                            </>
                        )}
                    </li>
                ))}
            </ul>
        );
    };


    return (
        <div>
            <p>{country.translations[translation].common}</p>
            <NestedList data={nestedArray}/>
            {/*<DeleteButton*/}
            {/*    id={params.id}*/}
            {/*/>*/}
        </div>
    );
}

export default CountryCardComponent;