import React, {useState, useEffect}  from 'react';
import error from "eslint-plugin-react/lib/util/error.js";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const API = 'https://679286cdcf994cc6804a5368.mockapi.io/tasks'

    const getTotdos = async () => {
        try {
            const request = await fetch(API),
                  response = await request.json();
            console.log(response);
            setTodos((prevState) => response);
        }
        catch (error) {
            console.log(error);
        }

        console.log(todos);
    }
    useEffect(() => {
        getTotdos()
        }, []);

    return todos.length ? (
        <ul>
            {todos.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    ): null;
};

export default Todo;