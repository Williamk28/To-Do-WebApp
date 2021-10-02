export default (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return{
                ...state,
                taskArray: [...state.taskArray, action.payload]
                
            }
        case 'FINISH_TASK':
            return {
                ...state,
                taskArray: state.taskArray.filter(task => task.id !== action.payload.id),
                completedArray: [...state.completedArray, action.payload]
            }
        default:
            return state;
    }
}