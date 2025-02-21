import React, {useEffect, useState} from "react";

export default function Select2({translations = [], handleSelectTranslation}) {
    return (
        <>
            <select onChange={handleSelectTranslation}>
                {Object.entries(translations).map(([key, lang]) => <option key={key} value={key}>{key}</option>)}
            </select>

        </>
    );
}