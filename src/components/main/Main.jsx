import React from 'react';
import { useToken } from '../../providers/tokenProvider';
import MainCenter from '../main-center/Main-center';
import MainLeft from '../main-left/Main-left';
import MainRight from '../main-right/Main-right';
import './main.css'


const Main = () => {

    const [token, setToken] = useToken()

    console.log('Main.jsx ga kirib kelgan token bu ',token)

    return (
        <div className='main-section'>

            <MainLeft/>
            <MainCenter/>
            <MainRight/>
        </div>
    );
}

export default Main;
