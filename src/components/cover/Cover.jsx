import React from 'react';
import { useToken } from '../../providers/tokenProvider';
import { useUnReg } from '../../providers/unRegistedProvider';
import Login from '../login/Login';
import Main from '../main/Main';

const Cover = () => {

  const [token, setToken] = useToken()

  const [unReg, setUnReg] = useUnReg()


    return (
        <div>
            {(token || unReg )? '' : <Login/>}
            {(token || unReg ) ? <Main/> : 'Please, Login to enter to the site !!!'}
            {/* {
                // console.log('Token : ' + token + ' Unreg : ' + unReg)
            }
            {unReg ? <Main/> : ''} */}
            
        </div>
    );
}

export default Cover;
