import React, { useRef, useState } from "react";
import './style.sass'
import Block from "./Block.jsx";
import service from "../services/services.js";

export default function FormDefault({reference, onSubmitHandler}) {
    const formRef1 = useRef();
    const formRef2 = useRef();
    const input1 = useRef();
    const input2 = useRef();
    const [status, setStatus] = useState([1,1]);
    const [requestResult1, setRequestResult1] = useState(null);
    const [requestResult2, setRequestResult2] = useState(null);

    const handleFormSubmit = async (e, index) => {
        e.preventDefault();
        try {
            console.log("AAA: " + index)
            let result = await service.get(formRef1.current[0].value)
            console.log(result)
            if (index === 0) {
                setRequestResult1(result)
            }
            if (index === 1) {
                setRequestResult2(result)
            }
            if(result.status === '404') {
                setStatus((prevState) => {prevState[index] = 0; return prevState; })
                console.log(status)
            }
            if (result.id) {
                setStatus((prevState) => {prevState[index] = 2; return prevState; })
                console.log(status)
            }
        } catch (error) {
            console.log(error)
        }
        // handleRequest(result)
    };

    // const handleRequest = (result) => {
    //     if (result.id)
    //         return
    //
    //     if (result.status === '404')
    //         return
    //
    //     if (form1 && form2)
    //         return
    // }

    return (
        <>
            <div className="container">
                <form className="first__form" onSubmit={(e) => handleFormSubmit(e, 0)} ref={formRef1}>
                    <Block
                        status={status[0]}
                        player={"Player 1"}
                        requestResult={requestResult1}
                    />
                </form>
                <form className="second__form" onSubmit={(e) => handleFormSubmit(e, 1)} ref={formRef2}>
                    <Block
                        status={status[1]}
                        player={"Player 2"}
                        requestResult={requestResult2}
                    />


                    {/*<div>*/}
                    {/*    <img className={"image"} src={'./src/assets/react.svg'} alt={"img"}/>*/}
                    {/*</div>*/}
                    {/*<label className={"labeltitle"}>*/}
                    {/*    {"Choose "} <strong>{"Player 2"}</strong> {" username"}*/}
                    {/*</label>*/}
                    {/*<input ref={input2}*/}
                    {/*       type="text"*/}
                    {/*       placeholder="`Player 2"*/}
                    {/*/>*/}
                    {/*<button className={'submitbutton'}>Submit</button>*/}
                </form>
            </div>
        </>
    );
}