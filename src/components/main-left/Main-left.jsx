import React from 'react';
import './main-left.scss'
import twitterLogo from '../../img/twitter-logo.png'
import home from '../../img/left-home.png'
import exp from '../../img/left-explore.png'
import not from '../../img/left-not.png'
import mes from '../../img/left-mes.png'
import book from '../../img/left-bookmarks.png'
import list from '../../img/left-lists.png'
import prof from '../../img/left-prof.png'
import more from '../../img/left-more.png'
import LeftUser from './left-user/Left-user';
import { useToken } from '../../providers/tokenProvider';


const MainLeft = () => {

    const [token, setToken] =useToken()

    return (
        <div className='main-left'>
            <img src={twitterLogo} alt="" />
            <ul>
                <li>
                    <img src={home} alt="" />
                    <p>Home</p>
                </li>
                <li>
                    <img src={exp} alt="" />
                    <p>Explore</p>
                </li>
                <li>
                    <img src={not} alt="" />
                    <p>Notifications</p>
                </li>
                <li>
                    <img src={mes} alt="" />
                    <p>Messages</p>
                </li>
                <li>
                    <img src={book} alt="" />
                    <p>Bookmarks</p>
                </li>
                <li>
                    <img src={list} alt="" />
                    <p>Lists</p>
                </li>
                <li>
                    <img src={prof} alt="" />
                    <p>Profile</p>
                </li>
                <li>
                    <img src={more} alt="" />
                    <p>More</p>
                </li>
            </ul>
            <button>Tweet</button>
            {token ? <LeftUser/> : ''}
        </div>
    );
}

export default MainLeft;
