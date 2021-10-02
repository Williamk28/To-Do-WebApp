import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Task = (props) => {
    const {finishTask} = useContext(GlobalContext);
    return (
        <li>
            {props.taskObj.text}
            <button 
                onClick = {() => finishTask(props.taskObj)} 
                className = "complete-button"
            > 
                ✓
            </button>
        </li>
    )

}
