import React from 'react';
import TodosItem from "./TodosItem.jsx";

// import TodosItem from "./TodosItem.jsx";

function TodosList({todos, handleItemIncrem, handleItemDecrem, handleItemDelete}) {
    console.log(todos)
    return (
        <tr>
            <td key={0}>{todos.filter(value => value.status === 0).map((item, i) => <ul key={"ul" + i}>
              <TodosItem
               handleItemIncrem={handleItemIncrem}
               item={item}
               i={0}
              />
            </ul>)}</td>
            <td key={1}>{todos.filter(value => value.status === 1).map((item, i) => <ul key={"ul" + i}>
               <TodosItem
               handleItemIncrem={handleItemIncrem}
               handleItemDecrem={handleItemDecrem}
               item={item}
               i={1}/>
            </ul>)}</td>
            <td key={2}>{todos.filter(value => value.status === 2).map((item, i) => <ul key={"ul" + i}>
                <TodosItem
                handleItemDelete={handleItemDelete}
                item={item}
                i={2}
                />
            </ul>)}</td>
        </tr>
        // <td key={0}>{todos.filter(value => value.status === 0).map((item, i) => <ul key={"ul" + i}>
        //     <TodosItem/>
        // </ul>)}
        // </td>
    )
        ;
}

// <td key={0}>{todos.filter(value => value.status === 0).map((item, i) => <ul key={"ul" + i}>
//     <li key={"li" + i}>{item.title} <Button title="In Progress"
//                                             handleClick={(e) => handleItemIncrem(e, item.id)}/>
//     </li>
// </ul>)}</td>
// <td key={1}>{todos.filter(value => value.status === 1).map((item, i) => <ul key={"ul" + i}>
//     <li key={"li" + i}>{item.title}
//         <Button title="To Do" handleClick={(e) => handleItemDecrem(e, item.id)}/>
//         <Button title="Done" handleClick={(e) => handleItemIncrem(e, item.id)}/>
//     </li>
// </ul>)}</td>
// <td key={2}>{todos.filter(value => value.status === 2).map((item, i) => <ul key={"ul" + i}>
//     <li key={"li" + i}>{item.title}
//         <Button title="To Archive" handleClick={(e) => handleItemDelete(e, item.id)}/>
//     </li>
// </ul>)}</td>

export default TodosList;