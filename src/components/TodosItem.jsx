import React from 'react';
import Button from "./Button.jsx";


function TodosItem({i,item,handleItemIncrem,handleItemDecrem,handleItemDelete}) {

    if (handleItemIncrem) {
        return(
        <li key={"li" + i}>{item.title}
            <Button title="In Progress" handleClick={(e) => handleItemIncrem(e, item.id)}/>
        </li>)
    }
    if (handleItemDecrem) {
        return (
            <li key={"li" + i}>{item.title}
                <Button title="To Do" handleClick={(e) => handleItemDecrem(e, item.id)}/>
                <Button title="Done" handleClick={(e) => handleItemIncrem(e, item.id)}/>
            </li>
        );
    }
    if (handleItemDelete) {
        return (
            <li key={"li" + i}>{item.title}
                <Button title="To Archive" handleClick={(e) => handleItemDelete(e, item.id)}/>
            </li>
        )
    }
}

export default TodosItem;