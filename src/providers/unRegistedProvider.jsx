import React, { createContext, useContext, useState } from 'react';

const Context = createContext()

const Unregistedprovider = ({children}) => {

    const [forPass, setForPass] = useState('')

    const value = {forPass, setForPass}

    return <Context.Provider value={value}>
            <Context.Consumer>
                {
                    () => children
                }
            </Context.Consumer>
        </Context.Provider>
}

export const useUnReg = () => {
    const {forPass, setForPass} = useContext(Context)
    return [forPass, setForPass]
}

export default Unregistedprovider;
