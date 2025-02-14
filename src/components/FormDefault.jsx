import React, {useEffect, useRef, useState} from "react";
import './style.sass'
import FormBlock from "./FormBlock.jsx";
import service from "../services/services.js";
import Button from "./Button.jsx";

export default function FormDefault() {
    const formRef1 = useRef();
    const formRef2 = useRef();
    const [status, setStatus] = useState([1, 1]);
    const [requestResult1, setRequestResult1] = useState(null);
    const [requestResult2, setRequestResult2] = useState(null);
    const compare = [2, 2]
    const compareRestart = [3, 3]

    const handleFormSubmit = async (e, index) => {
        e.preventDefault();
        let refFormNeeded = index === 0 ? formRef1 : formRef2;
        try {
            let result = await service.get(refFormNeeded.current[0].value)
            console.log("HERE")
            console.log(result)
            if (index === 0) {
                setRequestResult1(result)
            }
            if (index === 1) {
                setRequestResult2(result)
            }
            if (result.status === '404') {
                setStatus((prevState) => {
                    const newState = [...prevState];
                    newState[index] = 0;
                    return newState;
                });
            }
            if (result.id) {
                setStatus((prevState) => {
                    const newState = [...prevState];
                    newState[index] = 2;
                    return newState;
                });
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleBattleButton = async (e) => {
        e.preventDefault();
        try {

            let result1 = await service.getbuttledata(requestResult1.login)
            let result2 = await service.getbuttledata(requestResult2.login)

            const getStars = (data) => {
                const initialValue = 0;
                return data.reduce(
                    (accumulator, currentValue) => accumulator + currentValue.stargazers_count,
                    initialValue,
                );
            }

            const stars1 = getStars(result1);
            const stars2 = getStars(result2);

            setRequestResult1({
                "followers": requestResult1.followers,
                "login": requestResult1.login,
                "avatar_url": requestResult1.avatar_url,
                "stars": stars1,
                "isWin": stars1 + requestResult1.followers > stars2 + requestResult2.followers
            })

            setRequestResult2({
                "followers": requestResult2.followers,
                "login": requestResult2.login,
                "avatar_url": requestResult2.avatar_url,
                "stars": stars2,
                "isWin": stars1 + requestResult1.followers < stars2 + requestResult2.followers
            })

            setStatus((prevState) => {
                prevState[0] = 3;
                return prevState;
            })
            setStatus((prevState) => {
                prevState[1] = 3;
                return prevState;
            })

        } catch (error) {
            console.log(error)
        }
    };


    let isWin = null;
    if (requestResult1 && requestResult1.hasOwnProperty("isWin")) {
        console.log(isWin)
        isWin = requestResult1.isWin;
    }

    const handleFormReset = (e, index) => {
        setStatus((prevState) => {
            const newState = [...prevState];
            newState[index] = 1;
            return newState;
        });
    };

    const handleFormRestart = (e) => {
        e.preventDefault();
        setStatus(() => {
            return [1, 1];
        });
    };

    return (
        <>
        <div className="container">
            <div>
                <div className="win">
                    {isWin === null ? "" : isWin ? <span>Winner😀</span> : <span>Loser😪</span>}
            </div>
            <form className="first__form" onSubmit={(e) => handleFormSubmit(e, 0)} ref={formRef1}>
                <FormBlock
                    formId={0}
                    status={status[0]}
                    player={"Player 1"}
                    requestResult={requestResult1}
                    handleFormReset={handleFormReset}
                />
            </form>
        </div>
        <div>
            <div className="win">
                {isWin === null ? "" : isWin ? <span>Loser😪</span> : <span>Winner😀</span>}
            </div>
            <form className="second__form" onSubmit={(e) => handleFormSubmit(e, 1)} ref={formRef2}>
                <FormBlock
                    formId={1}
                    status={status[1]}
                    player={"Player 2"}
                    requestResult={requestResult2}
                    handleFormReset={handleFormReset}
                />
            </form>
        </div>
        </div>
    <div className={'buttlediv'}>
        {
            status.every((value, index) => value === compare[index]) ?
                <Button
                    className={'battle_button'}
                    clickHandler={handleBattleButton}
                    name={"Battle"}
                /> :
                <></>
        }
    </div>
    <div className={'restartdiv'}>
        {
            status.every((value, index) => value === compareRestart[index]) ?
                <Button
                    className={'restart_button'}
                    clickHandler={handleFormRestart}
                    name={"Restart"}
                /> :
                <></>
        }
    </div>
</>
)
    ;
}