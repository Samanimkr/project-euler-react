const initState = {
   logs: [],
   isCalculating: false,
};

const rootReducer = (state = initState, action) => {
    if (action.type === 'LOG_TO_CONSOLE') {
        const newLogs = [...state.logs];
        newLogs.push(action.msg);
        return {
            ...state,
            logs: newLogs
        }
    } else if (action.type === 'SOLVE_PROBLEM_DONE') {
        const newLogs = [...state.logs];
        newLogs.push(action.answer);
        return {
            ...state,
            logs: newLogs
        }
    }

    return state;
}

export default rootReducer;