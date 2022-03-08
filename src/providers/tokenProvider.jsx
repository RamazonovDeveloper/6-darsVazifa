
import React, { createContext, useContext, useState } from 'react';

const Context = createContext()

const Tokenprovider = ({children}) => {

    const [token, setToken] = useState('')

    const value = {token,setToken}

    return <Context.Provider value={value}>
        <Context.Consumer>
            {
                () => children
            }
        </Context.Consumer>
    </Context.Provider>
}

export const useToken = () => {
    const {token, setToken } = useContext(Context)
    return [token, setToken]
}

export default Tokenprovider;
