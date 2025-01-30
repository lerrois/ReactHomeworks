import React from 'react';
import Button from "./Button.jsx";

function TodosItem({handleItemIncrem}) {
    return (
        <li key={"li" + i}>{item.title} <Button title="In Progress"
                                                handleClick={(e) => handleItemIncrem(e, item.id)}/>
        </li>
    );
}

export default TodosItem;