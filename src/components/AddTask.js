import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

//This function adds a task to the transaction list
export const AddTask = () => {
    const [text, setTask] = useState('');
    const {addTask} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTask = {
            id: Math.round(Math.random()*100000),
            text: text
        }
        addTask(newTask);
        setTask('');
    }

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <input className = "inputBox" type = "text" value = {text} onChange = {(e) => setTask(e.target.value)} placeholder="Enter a task..."/>
                <button className = "button" disabled = {!text}> Add Task </button>
            </form>
        </div>
    )
}
