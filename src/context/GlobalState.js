import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

//Initial State - the array which will contain all the tasks
const initialState = {
    taskArray: [],
    completedArray: []
}

// Create Global Context
export const GlobalContext = createContext(initialState)

// Provider Component - so other componenets have access to the intial state
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions
function addTask(task){
    dispatch({
        type: 'ADD_TASK',
        payload: task
    });
}

function finishTask(task){
    dispatch({
        type: 'FINISH_TASK',
        payload: task
    });
}

    return (<GlobalContext.Provider value={{
        taskArray: state.taskArray,
        completedArray: state.completedArray,
        addTask,
        finishTask
    }}>
        {children}
    </GlobalContext.Provider>);
}