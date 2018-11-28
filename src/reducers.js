const initState = {
   logs: [],
   isCalculating: false,
};

const reducer = (state = initState, action) => {
    if (action.type === 'IS_CALCULATING_TRUE') {
        return {
            ...state,
            isCalculating: true
        }
    } else if (action.type === 'IS_CALCULATING_FALSE') {
        return {
            ...state,
            isCalculating: false,
        }
    } else if (action.type === 'LOG_TO_CONSOLE') {
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

export default reducer;