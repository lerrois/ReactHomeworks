import React, {useEffect, useState} from "react";

export default function Select1({handleSelect1, countries, currentCountry}) {
    let selectValue = "Kyiv"
    if (currentCountry.length !== 0) {
        selectValue = currentCountry.capital[0]
    }
    return (
        <>
            <select onChange={handleSelect1} value={selectValue}>
                {countries.map((country) => (
                    <option key={country.id} value={country.capital[0]}>{country.flag} {country.capital[0]}</option>))}
            </select>
        </>
    );
}
