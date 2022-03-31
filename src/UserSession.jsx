import React, {useReducer, createContext, useContext, useState} from 'react';

export const SessionContext = createContext(null);


/*
const SessionReducer = (state, action) => {
    switch(action.type)
    {
        case 'addSession':
            return {name:state.name}
        default:
            return {name:"L"}
    }
}
*/
export const SessionProvider = ({children}) => {
    /*
    const [state, dispatch] = useReducer(SessionReducer, {name:""});
    const addSession = (name) => {
        dispatch({type:'addSession',playload:{name:name}})
    }
    let value = {state, addSession}
    */
   const [name, setSession] = useState('Not signed in yet');
   return <SessionContext.Provider value={{name,setSession}}>{children}</SessionContext.Provider>
}

export const useSession = () => {
    const context = useContext(SessionContext);
    return context;
}