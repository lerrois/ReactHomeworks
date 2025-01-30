import React, {useState, useEffect} from 'react';
import './style.sass'
import Button from "./Button.jsx";
import TodosForm from './TodosForm.jsx';
import { API, TDS } from "../constants/todos";
import TodosList from "./TodosList.jsx";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    // let tds = ["To Do", "In Progress", "Done", "On Hold"];

    const getTodos = async () => {
        try {
            const request = await fetch(API),
                response = await request.json();
            setTodos((prevState) => response);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getTodos()
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

    const handleItemDelete = async (e, id) => {
        try {
            setTodos((prevState) => prevState.filter((item, key) => {
                if (item.id === id) {

                    return false;
                }
                else {
                    return true;
                }
            }));
        } catch (err) {
            console.log(err);
        }
    }
    const addNewTodo = async (item) => {
        try {
            let response = await fetch(API, {
                method: `POST`,
                body: JSON.stringify(item),
                headers: {
                    "Content-type": "application/json",
                },
            }).then((data) => {
                return data.json()
            } )
            response.status = item.status;
            setTodos((prevState) => {
              prevState.push(response)
              return prevState;
            });
            getTodos();
        } catch (err) {
            console.log(err);
        }
    };

    return <div>
        <TodosForm TDS={TDS} liftingNewTodo={addNewTodo} />
    <table>
        <tbody>
        <tr>
            <th>{'To Do'}</th>
            <th>{'In Progress'}</th>
            <th>{'Done'}</th>
        </tr>
        <TodosList
            todos={todos}
            handleItemIncrem={handleItemIncrem}
            handleItemDecrem={handleItemDecrem}
            handleItemDelete={handleItemDelete}
        />

        </tbody>
    </table>
    </div>
};

export default Todo;



