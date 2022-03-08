import React from 'react';
import './main-center.scss'
import MainUserData from './main-center-user-data/Main-user-data'
// import { useUnReg } from '../../providers/unRegistedProvider';
import { useToken } from '../../providers/tokenProvider';
import homeStar from '../../img/home-star.png'
import Gotologin from './main-goto-login/GotoLogin';

const MainCenter = () => {

    const [token, setToken] = useToken()

    return (
        <div className='main-center'>
            <div className='main-center-home'>
                <h2>Home</h2>
                <img src={homeStar} alt="" />
            </div>

            {token ? <MainUserData/> : <Gotologin/> }
        </div>
    );
}

export default MainCenter;
