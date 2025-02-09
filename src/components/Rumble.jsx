import React, {useEffect, useRef, useState} from "react";
import FormDefault from "./FormDefault.jsx";
import service from "../services/services.js";

export default function Rumble() {

    const handleFormSubmit = async (e, index) => {
        e.preventDefault();
        try {
            let result = await service.get(formRef1.current[0].value)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
        handleRequest(result)
    };


    const handleRequest = (result) => {
        if (result.id)
            return

        if (result.status === '404')
            return

        if (form1 && form2)
            return
    }

    const handleButtle = (e) => {}

    const handleFormInput = (e, index) => {
        console.log(formRef1)
        // setNewTodo((prevState) => {
        //     return { ...prevState, status: e.target.value };
        // });
    };


    return (
        <>
            <FormDefault />
        </>
    );
}