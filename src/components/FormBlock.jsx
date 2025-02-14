import React, {useRef} from 'react';
import './style.sass'

function FormBlock({status, player, requestResult, handleFormReset, formId }) {

    if (status === 1) {
        return (
            <>
                <label className={"labeltitle"}>
                    {"Choose "} <strong>{player}</strong> {" username"}
                </label>
                <input
                       type="text"
                       placeholder={player}
                />
                <button className={'submitbutton'}>Submit</button>
            </>
      )
    }

    if (status === 2) {
        console.log("Status 2 - ")
        console.log(requestResult)
        const avatarUrl = requestResult.avatar_url
        const username = requestResult.login
        return (

            <>
                    <div>
                        <img className={"image"} src={avatarUrl} alt={"img"}/>
                    </div>
                    <label className={"labeltitle"}>
                        @{username}
                    </label>
                    <button className={'resetbutton'} onClick={(e) => handleFormReset(e, formId)} >Reset</button>
            </>
        )
    }

    if (status === 0) {
        return (
            <>
                <label className={"labeltitle"}>
                    {"Choose "} <strong>{player}</strong> {" username"}
                </label>
                <input
                       type="text"
                       placeholder={player}
                />
                <div className={'errordiv'}>
                    <span className={"notexist"}>
                        Username not exist
                    </span>
                </div>
                <button className={'submitbutton'} >Submit</button>

            </>
        )
    }

    if (status === 3) {
        const avatarUrl = requestResult.avatar_url
        const username = requestResult.login
        const followers = requestResult.followers;
        const stars = requestResult.stars;
        const score = + followers + stars;

        return (
            <>
                <div>
                    <img className={"image"} src={avatarUrl} alt={"img"}/>
                </div>
                <label className={"labeltitle"}>
                    @{username}
                </label>
                <div className={'textdiv'}>
                    <span>{"Followers: "} {followers}</span>
                    <span>{"Repositories stars: "} {stars} </span>
                    <span className={'boldtext'}>{"Total score: "} {score} </span>
                </div>
            </>
        )
    }


    return (
        <div>
            <img className={"image"} src={'./src/assets/react.svg'} alt={"img"}/>
        </div>
    );
}

export default FormBlock;