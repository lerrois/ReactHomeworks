import React, {useRef} from 'react';
import './style.sass'


// function FormBlock({status, player, requestResult, requestResultBattle, handleFormReset, formId }) {
function FormBlock({status, player, requestResult, handleFormReset, formId }) {

    const input1 = useRef();
    // console.log(status, formId)
    if (status === 1) {
        return (
            <>
                <label className={"labeltitle"}>
                    {"Choose "} <strong>{player}</strong> {" username"}
                </label>
                <input ref={input1}
                       type="text"
                       placeholder={player}
                />
                <button className={'submitbutton'}>Submit</button>
            </>
      )
    }

    if (status === 2) {
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
                <input ref={input1}
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

            console.log(requestResult)
        return (

            // "followers": requestResult1.followers,
            // "login": requestResult1.login,
            // "avatar_url": requestResult1.avatar_url,
            // "stars": getStars(result1)

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