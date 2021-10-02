import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { CompletedTask } from './CompletedTask'

export const CompleteList = () => {
    const {completedArray} = useContext(GlobalContext);
    //useEffect(() => {console.log(completedArray)}, [completedArray])
    let output = '';
    if (completedArray.length != 0){
        output = 'Well done! You have completed ' + completedArray.length + ' task(s)!'
    } else {
        output = 'You have not completed any tasks today!'
    }
    return (
        <div className = "listBackground">
            <h3>Completed Tasks</h3>
            <ul className = "list">
                {completedArray.map(currCompletedTask => (<CompletedTask key = {currCompletedTask.id} taskObj = {currCompletedTask} />))}
                <p> {output} </p>
            </ul>
        </div>
    )
}
