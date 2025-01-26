import React, {useState, useEffect} from 'react'
import './style.sass'

const list = [
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`}
]

export default function List() {
    const [animals, setList] = useState(list);
    const [intervalId, setintervalId] = useState(0);

    if (animals.filter((item) => item.active).length === animals.length) {
        clearInterval(intervalId);
    }
    useEffect( ()=> {
        const newIntId = setInterval(() => {
            let isFound = false;
            let result = 0;
         do {
             result = Math.floor(Math.random() * animals.length)
             let obj = animals[result];
             if (!obj.active) {
                 isFound = true;
             }
         }
         while (!isFound);

         setList((prevState) => {
             let newState = [...prevState];
             newState[result].active = true;
             return newState;
         })
        }, 1000)
        setintervalId(newIntId)

    }, [] );

    return <table className={'myTable borderclass'}>
        <tbody>{animals.map((item,key) => item.active ? (
        <tr className={'borderclass'} key={key}>
            <td className={'borderclass tdcolorred'}>{item.type}</td>
            <td className={'borderclass'}>{item.icon}</td></tr>) :
        (<tr className={'borderclass'} key={key}><td className={'borderclass'}>{item.type}</td>
            <td className={'borderclass'}>{item.icon}</td></tr>)
    )} </tbody></table>;
}