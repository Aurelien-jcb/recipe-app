import React, { useReducer, createContext, useEffect } from 'react';
import { AppReducer } from '../reducer/appReducer';

const initialState = {
    email: null,
    password: null,
    rememberMe: null
};

export const AppContext = createContext();

export const AppContextProvider = props => {
    const [appContext, appDispatch] = useReducer(AppReducer, initialState, () => {
        const localData = localStorage.getItem('appContext');
        return localData ? JSON.parse(localData) : initialState;
    });
    useEffect(() => {
        localStorage.setItem('appContext', JSON.stringify(appContext));
    }, [appContext]);

    return (
        <AppContext.Provider value={{ appContext, appDispatch }}>
            {props.children}
        </AppContext.Provider>
    );
}