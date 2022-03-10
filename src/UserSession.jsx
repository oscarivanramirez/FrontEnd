import React, {useReducer, createContext, useContext} from 'react';

export const SessionContext = createContext();

const SessionReducer =(state, id) => {
    return {sessionID: id,}
}

export const SessionProvider = ({children}) => {
    const [state, dispatch] = useReducer(SessionReducer, {sessionID: 0});

    let value = {state, dispatch}
    return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

export const useSession = () => {
    const context = useContext(SessionContext);
    return context;
}