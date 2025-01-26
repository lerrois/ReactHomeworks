import React, {useState, useEffect} from 'react';
import './style.sass'
import Button from "./Button.jsx";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const API = 'https://679286cdcf994cc6804a5368.mockapi.io/tasks'
    const tds = [0, 1, 2];

    const getTotdos = async () => {
        try {
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            const request = await fetch(API),
                response = await request.json();
            console.log(response);
            setTodos((prevState) => response);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getTotdos()
    }, []);


    const handleItemIncrem = async (e, id) => {
        e.stopPropagation();
        try {
            setTodos((prevState) => prevState.map((item, key) => {
                if (item.id === id) {
                    const newRecord = {...item};
                    newRecord.status = newRecord.status + 1;
                    return newRecord;
                }
                else {
                    return item;
                }
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleItemDecrem = async (e, id) => {
        try {
            setTodos((prevState) => prevState.map((item, key) => {
                if (item.id === id) {
                    const newRecord = {...item};
                    newRecord.status = newRecord.status - 1;
                    return newRecord;
                }
                else {
                    return item;
                }
            }));

        } catch (err) {
            console.log(err);
        }
    };

    return <table>
        <tbody>
        <tr>
            <td key={0}>{todos.filter(value => value.status === 0).map((item, i) => <ul key={"ul" + i}>
                <li key={"li" + i}>{item.title} <Button title="In Progress" handleClick={(e) => handleItemIncrem(e, item.id)} />
                </li>
            </ul>)}</td>
            <td key={1}>{todos.filter(value => value.status === 1).map((item, i) => <ul key={"ul" + i}>
                <li key={"li" + i}>{item.title}
                    <Button title="To Do" handleClick={(e) => handleItemDecrem (e, item.id)} />
                    <Button title="Done" handleClick={(e) => handleItemIncrem(e, item.id)} />
                </li>
            </ul>)}</td>
            <td key={2}>{todos.filter(value => value.status === 2).map((item, i) => <ul key={"ul" + i}>
                <li key={"li" + i}>{item.title}
                    <Button title="To Active" handleClick={(e) => handleItemDecrem(e, item.id)} />
                </li>
            </ul>)}</td>
        </tr>
        </tbody>
    </table>

};

export default Todo;



