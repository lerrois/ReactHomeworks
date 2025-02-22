import React, {useEffect, useState} from "react";

export default function Select2({translations = [], handleSelectTranslation}) {
    return (
        <>
            <select onChange={handleSelectTranslation} value="cym">
                {Object.entries(translations).map(([key, lang]) => <option key={key} value={key}>{key}</option>)}
            </select>

        </>
    );
}