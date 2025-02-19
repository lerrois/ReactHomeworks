import React, {createContext} from 'react';
import HomeComponent from "../components/Home Component.jsx";
import CountryFormComponent from "../components/CountryFormComponent.jsx";
import Header from "../pages/Header.jsx";
// import CountriesContext from "../contexts/CountriesContext.jsx";

function HomeRoute(props) {
    return (
        <div>
            <Header />
              <HomeComponent />
            {/*<CountriesContext.Provider value={[1,2,3]}>*/}
              <CountryFormComponent />
            {/*</CountriesContext.Provider>*/}
        </div>
    );
}

export default HomeRoute;