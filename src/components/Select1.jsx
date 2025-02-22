import React, {useEffect, useState} from "react";

export default function Select1({handleSelect1, countries}) {
    return (
        <>
            <select onChange={handleSelect1} defaultValue={"Kyiv"}>
                {countries.map((country) => (
                    <option key={country.id} value={country.capital[0]}>{country.flag} {country.capital[0]}</option>))}
            </select>
        </>
    );
}

// defaultValue={sort}