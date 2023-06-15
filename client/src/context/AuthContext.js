import {createContext, useReducer} from "react"
import AuthReducer from "./AuthReducer"
const INITIAL_STATE={
    user:{
        _id:"63f3285cefae21ca9f182fe7"
        ,username:"memo998877",
        email:"marwankaraga44@gmail.com",
        profilePicture:"heart.png",
    },
    isFetching:false,
    error:false
};
export const Authcontext=createContext(INITIAL_STATE);
export const AuthcontextProvider= ({children}) =>{
    const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE);
    return(
        <Authcontext.Provider value={{user:state.user ,
            isFetching: state.isFetching,
        error:state.error,
        dispatch
        }}>
            {children}
        </Authcontext.Provider>
    )
}

 

 