import React, {useContext} from 'react';
import CountryCardComponent from "../components/Country Card Component.jsx";
import RedirectButtonComponent from "../components/RedirectButtonComponent.jsx";
import Header from "../pages/Header.jsx";
import DeleteButton from "../components/DeleteButton.jsx";
import CountriesContext from "../contexts/CountriesContext.jsx";
import { useParams } from 'react-router';

function Country(props) {
    const params = useParams();
    console.log(params);
    const countries = useContext(CountriesContext);
    const country = countries.cntrs.filter((item) => item.id === params.id)[0];
    console.log(country);

    // const res = function getData(obj) => {
    //     console.log(obj)
    //     for(const prop in obj) {
    //         if (typeof prop === "string") {
    //             return <li>prop</li>;
    //         }
    //         else {
    //             getData(prop)
    //         }
    //     }
    //
    // }
    // const output = res(country)
    //     console.log(output);
    return (
        <div>
            <Header />

            {/*<>*/}
            {/*    {res}*/}
            {/*</>*/}

            <CountryCardComponent />
            {/*<DeleteButton*/}
            {/*    id={params.id}*/}
            {/*/>*/}
            <RedirectButtonComponent />
        </div>
    );
}

export default Country;