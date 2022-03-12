import React, {useReducer, createContext, useContext} from 'react';

export const SessionContext = createContext();

const SessionReducer =(name) => {
    return name
}

export const SessionProvider = ({children}) => {
    const [state, dispatch] = useReducer(SessionReducer, "");

    let value = {state, dispatch}
    return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

export const useSession = () => {
    const context = useContext(SessionContext);
    return context;
}