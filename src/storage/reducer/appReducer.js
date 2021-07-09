export const AppReducer = (state, action) => {

    switch (action.type) {
        case "UPDATE_APP":
            return { ...state, 
                email: action.value.email, 
                password: action.value.password, 
            }
        default:
            return state;
    }
};