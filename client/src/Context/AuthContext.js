import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    
    switch(action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    //check if user exists from local storage and update state
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        
        if(user) {
            //TESTING THE VALUE WE CAN DELIVER USER.USER BUTTTTT
            dispatch({type: 'LOGIN', payload: user.user})
        }
    }, [])
    console.log('AuthContext state: ', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}

