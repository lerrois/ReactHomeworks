import React from 'react';
import Button from "./Button.jsx";
import { TDS } from "../constants/todos";

function TodosItem({i,item,handleItemIncrem,handleItemDecrem,handleItemDelete}) {
    return <li key={"li" + i}>{item.title}
        {handleItemDecrem ? <Button title={TDS[i-1]} handleClick={(e) => handleItemDecrem(e, item.id)}/> : ""}
        {handleItemIncrem ? <Button title={TDS[i+1]} handleClick={(e) => handleItemIncrem(e, item.id)}/> : ""}
        {handleItemDelete ? <Button title={TDS[i+1]} handleClick={(e) => handleItemDelete(e, item.id)}/> : ""}
    </li>

}
export default TodosItem;