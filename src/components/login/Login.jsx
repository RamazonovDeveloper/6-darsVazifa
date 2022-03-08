import React, { useEffect, useRef, useState } from 'react';
import { useToken } from '../../providers/tokenProvider';
import { useUnReg } from '../../providers/unRegistedProvider';
import './Login.scss'
import twitter from '../../img/twitter-logo.png'

const Login = () => {

    const [token, setToken] = useToken()

    const [unReg, setUnReg] = useUnReg()
    
    const [conTok, setConTok] = useState(false)

    const [conReg, setConReg] = useState(false)

    const emailRef = useRef()
    const passwordRef = useRef()


    useEffect(() => {

        const checkEmail = (data) => {
            return fetch('https://reqres.in/api/login', {
                    method: "POST",
                    headers: {
                    "content-type": "application/json",
                    },
                    body: JSON.stringify(data)
                }).then(res => res.json())
                .then(res => {setToken(res.token)})
                .catch(err => {alert(err)})
            // return result
        }

        const newUser = {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        }

        // const origin = {
        //     email: "eve.holt@reqres.in",
        //     password: "cityslicka"
        // }

        // const defaultData = {
        //     email:"something",
        //     password:'1234'
        // }

        
        
        const user = {
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
        // console.log(user)
        // const data = user || defaultData

        checkEmail(user)

        // console.log(token)

        // if(token != 0){'salom'}

        // conTok ? setToken('Salom hammaga men tokenjon bo`laman') : setToken('undefined')
    },[conTok])

    useEffect(() => {
        // {conReg ? setUnReg('limited') : ''}
        if(conReg){
            setUnReg('limited')
        }
        console.log(unReg)
    },[conReg])

    return (
        <div className='loginPage'>
            <img src={twitter} alt="" />
            <h3>Log in to Twitter</h3>
            <input placeholder='Phone number, email address' className='loginPage__email' ref={emailRef} type="text"  />
            <input placeholder='Password' className='loginPage__password' ref={passwordRef} type="password" />
            <button onClick={() => {setConTok(x => !x)}}>Log In</button>
            <div>
                <button onClick={() => {setConReg(x => !x)}}>Forgot password?</button>
                <button>Sign up to Twitter</button>
            </div>
            <div>{token}</div>
        </div>
    );
}

export default Login;
