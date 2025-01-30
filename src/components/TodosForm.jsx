import React, { useRef, useState } from "react";
import './style.sass'
import { NEW_TODO_DEFAULT, TDS } from "../constants/todos";
// lifting state up

export default function TodosForm({liftingNewTodo, tds}) {
// export default function TodosForm({liftingNewTodo}) {
    const inputTitle = useRef();
    const inputSelect = useRef();
    const formRef = useRef();
    const [newTodo, setNewTodo] = useState(NEW_TODO_DEFAULT);

    const handleFormTitle = (e) => {
        setNewTodo((prevState) => ({ ...prevState, title: e.target.value }));
    };

    const handleFormSelect = (e) => {
        setNewTodo((prevState) => {
            return { ...prevState, status: e.target.value };
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        liftingNewTodo(newTodo);
    };

    return (
        <form className="todo__form" onSubmit={handleFormSubmit} ref={formRef}>
            <label>
                Select{" "}
                <select
                    // value={0}
                    onChange={handleFormSelect}
                    ref={inputSelect}
                >
                    {TDS.map((item, key) => <option key={key} value={key}>{item}</option>)}
                </select>
            </label>

            <label>
                Title{" "}
                <input
                    type="text"
                    ref={inputTitle}
                    defaultValue={newTodo.title}
                    onChange={handleFormTitle}
                />
            </label>
            <button>Add Todo</button>
        </form>
    );
}