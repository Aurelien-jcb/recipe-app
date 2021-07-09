export const UserReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return {
                ...state,
                profile: {
                    firstName: action.value.firstName,
                    lastName: action.value.lastName,
                    id: action.value.id,
                    email: action.value.email,
                },
                recipes: action.value.recipes,
                token: action.value.token,
            }
        default:
            return state;
    }
};