import React from 'react'
import UserContext from './userContext'

import { useState } from 'react'

const UserContextProvider = ({children}) => {
    const [user,setuser] = useState("user")
    return(
        <UserContext.Provider value = {{user,setuser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;