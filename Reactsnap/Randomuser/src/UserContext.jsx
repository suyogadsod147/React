import React , { useContext , createContext , useState } from "react";

const UserContext = createContext();

export function useUserContext(){
    return useContext(UserContext)
} 


export function UserProvider ({children}){
    const [user , setUser] = useState(null);

    const setUserData=(userData)=>{
        setUser(userData);
    }


    return(
        <UserContext.Provider value={{user , setUserData}}>
            {children}
        </UserContext.Provider>
    )

}


