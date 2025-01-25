import React, {useState, useEffect} from 'react'
import './style.sass'

// component lifecycle

// componentDidMount
// componentDidUpdate
// componentWillUnmount
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
    const [recordColor, setRecordColor] = useState(`black`);

    // setValue(counter+1); // 0+1 => 1
    // setValue( (prevState) => prevState+1 )
    // useEffect( ()=>{}, [] ) - run only on first component render

    console.log('active: ' + (animals.filter((item) => item.active).length))
    if (animals.filter((item) => item.active).length === animals.length) {
        console.log('Clear interval')
        clearInterval(intervalId);
    }
    useEffect( ()=> {
        console.log(`in useEffect`);
        const incrementIntId = setInterval(() => {
            let isFound = false;
            let result = 0;
         do {
             result = Math.floor(Math.random() * animals.length)
             // console.log('res ' + result)
             let obj = animals[result];
             // console.log(obj)
             if (!obj.active) {
                 console.log('Found place to change color');
                 isFound = true;
             }
         }
         while (!isFound);
         let obj = animals[result];
         obj.active = true;
         animals[result] = obj;
         setList(animals)
        }, 1000)

        setintervalId(incrementIntId)

        // fetch();


        return () => {
            console.log(`in componentWillUnmount!!!`);
            //clearInterval(intervalId);
        }
    }, [] );

    console.log(animals)
    // return <table className={'myTable borderclass'}> <tbody>{animals.map((item,key) => item.active ? (
    //     <tr className={'borderclass'} key={key}><td className={'borderclass tdcolorred'}>{item.type}</td><td className={'borderclass'}>{item.icon}</td></tr>) :
    //     (<tr className={'borderclass'} key={key}><td className={'borderclass'}>{item.type}</td><td className={'borderclass'}>{item.icon}</td></tr>)
    // )} </tbody></table>;
    return <table className={'myTable borderclass'}> <tbody>{animals.map((item,key) => item.active ? (
        <tr className={'borderclass'} key={key}><td className={'borderclass'}>{item.type}</td><td className={'borderclass'}>{item.icon}</td></tr>) :
        (<tr className={'borderclass'} key={key}><td className={'borderclass tdcolorred'}>{item.type}</td><td className={'borderclass'}>{item.icon}</td></tr>)
    )} </tbody></table>;

}