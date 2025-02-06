import React, {useRef} from 'react';
import './style.sass'

function Block({status, player, requestResult}) {

    const input1 = useRef();
    console.log(status)
    if (status === 1) {
        return (
            <>
                <label className={"labeltitle"}>
                    {"Choose "} <strong>{player}</strong> {" username"}
                </label>
                <input ref={input1}
                       type="text"
                       placeholder="`Player 1"
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
                <form className="first__form" onSubmit={(e) => handleFormSubmit(e, 1)} ref={formRef1}>
                    <div>
                        <img className={"image"} src={avatarUrl} alt={"img"}/>
                    </div>
                    <label className={"labeltitle"}>
                        {username}
                    </label>
                    <button className={'resetbutton'}>Reset</button>
                </form>
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
                       placeholder="`Player 1"
                />
                <div className={'errordiv'}>
                    <span className={"notexist"}>
                        Username not exist
                    </span>
                </div>
                <button className={'submitbutton'}>Submit</button>

            </>
        )
    }

    return (
        <div>
            <img className={"image"} src={'./src/assets/react.svg'} alt={"img"}/>
        </div>
    );
}

export default Block;