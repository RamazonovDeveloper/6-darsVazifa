import React from 'react';
import { useToken } from '../../../providers/tokenProvider';
import { useUnReg } from '../../../providers/unRegistedProvider';
import './GotoLogin.css'

const Gotologin = () => {

    const [token, setToken] = useToken()
    const [unReg, setUnReg] =useUnReg()

    return (
        <div>
            <button className='gotoBtn' onClick={() => {setToken('');setUnReg(x=>!x)}}>Login to visit Own Page</button>
        </div>
    );
}

export default Gotologin;
