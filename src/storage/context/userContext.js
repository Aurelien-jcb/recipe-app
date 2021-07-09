import React, { useReducer, createContext, useEffect } from 'react';
import { UserReducer } from '../reducer/userReducer';

const initialState = {
    profile: {
        id: null,
        email: null,
        firstName: 'Aurel', 
        lastName: null,
        picture: null,
    },
    token: null,
    recipes: null,
};

export const UserContext = createContext();

export const UserContextProvider = props => {
    const [userContext, userDispatch] = useReducer(UserReducer, initialState, () => {
        const sessionData = sessionStorage.getItem('user');
        return sessionData ? JSON.parse(sessionData) : initialState;
    });
    useEffect(() => {
        sessionStorage.setItem('user', JSON.stringify(userContext));
    }, [userContext]);

    return (
        <UserContext.Provider value={{ userContext, userDispatch }}>
            {props.children}
        </UserContext.Provider>
    );
}