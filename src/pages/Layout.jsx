import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import CountriesContext from "../contexts/CountriesContext.jsx";
import services from "../services/services.js";
import FILEDATA from "../filedata/FILEDATA.js";


function Layout(props) {

    const [countries, setCountries] = useState([]);
    const getCountries = async () => {
        try {
            const response = await services.get();
            setCountries(FILEDATA)
            // setCountries(response)

        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getCountries();
    }, []);

    return (
        <>
            {/*<Header />*/}
            <main>
                <CountriesContext.Provider value={{cntrs: countries, setCntrs: setCountries}}>
                    <Outlet />
                </CountriesContext.Provider>
            </main>
            <footer></footer>
        </>
    );
}

export default Layout;