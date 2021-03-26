const INITIAL_STATE = {
    userEmail: "",
    userLoggedIn: 0
}


function accessReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "LOG_IN":
            return { ...state, userLoggedIn: 1, userEmail: action.userEmail }
        case "LOG_OUT":
            return { ...state, userLoggedIn: 0, userEmail: null }
        default:
            return state;
    }
}

export default accessReducer;