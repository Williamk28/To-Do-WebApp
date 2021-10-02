import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Task } from './Task';

export const TaskList = () => {
    const {taskArray} = useContext(GlobalContext);
    let output = '';
    if (taskArray.length != 0){
        output = 'You have ' + taskArray.length + ' remaining task(s) to complete!'
    } else {
        output = 'Dont be lazy... Add some tasks to your list'
    }

    return (
        <div className = "listBackground">
            <h3>Task List</h3>
            <ul className = "list">
                {taskArray.map(currTask => (<Task key = {currTask.id} taskObj = {currTask}/>))}
                <p> {output} </p>
            </ul>
        </div>
    )
}
