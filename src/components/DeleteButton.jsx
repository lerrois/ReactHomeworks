import React, {useContext} from 'react';
import CountriesContext from "../contexts/CountriesContext.jsx";

function DeleteButton({ id }) {
    const countries = useContext(CountriesContext);
    const setCountries = countries.setCntrs;

    const deleteItem = async (id) => {
        try {
            setCountries((prevState) => prevState.filter((item) => item.id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    const handleItemDelete = (e, id) => {
        e.stopPropagation();
        deleteItem(id);
    }

    return (
        <button onClick={ (e) => handleItemDelete(e, id) }>Delete</button>
    );
}

export default DeleteButton;