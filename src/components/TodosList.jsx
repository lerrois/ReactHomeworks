import React from 'react';
import Button from "./Button.jsx";
// import TodosItem from "./TodosItem.jsx";

function TodosList({todos, handleItemIncrem, handleItemDecrem, handleItemDelete}) {
    console.log("adsjkhdsfgjdgfhjhdfghj")
    return (
        <tr>
            <td key={0}>{todos.filter(value => value.status === 0).map((item, i) => <ul key={"ul" + i}>
                <li key={"li" + i}>{item.title} <Button title="In Progress"
                                                        handleClick={(e) => handleItemIncrem(e, item.id)}/>
                </li>
            </ul>)}</td>
            <td key={1}>{todos.filter(value => value.status === 1).map((item, i) => <ul key={"ul" + i}>
                <li key={"li" + i}>{item.title}
                    <Button title="To Do" handleClick={(e) => handleItemDecrem(e, item.id)}/>
                    <Button title="Done" handleClick={(e) => handleItemIncrem(e, item.id)}/>
                </li>
            </ul>)}</td>
            <td key={2}>{todos.filter(value => value.status === 2).map((item, i) => <ul key={"ul" + i}>
                <li key={"li" + i}>{item.title}
                    <Button title="To Archive" handleClick={(e) => handleItemDelete(e, item.id)}/>
                </li>
            </ul>)}</td>
        </tr>
        // <td key={0}>{todos.filter(value => value.status === 0).map((item, i) => <ul key={"ul" + i}>
        //     <TodosItem/>
        // </ul>)}
        // </td>
    )
        ;
}

export default TodosList;