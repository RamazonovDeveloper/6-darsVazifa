import React from 'react';
import './main-right.scss'
import search from '../../img/right-search.png'
import settigs from '../../img/right-settings.png'
import more from '../../img/left-user-more.png'
import RightLikes from './Right-likes/Right-likes';
import { useToken } from '../../providers/tokenProvider';

const MainRight = () => {

    const [token, setToken] = useToken()

    return (
        <div className='main-right'>
            <div className='main-right-search'><img src={search} alt="" /><input placeholder='Search Twitter' type="text" /></div>
            <div className='main-right-trends'>
                <div className='main-right-trends-title'>
                    <h3>Trends for you</h3>
                    <img src={settigs} alt="" />
                </div>
                <div className='main-right-trends-item'>
                    <div className='main-right-trends-item-text'>
                        <p>Trending in Germany</p>
                        <h4>Revolution</h4>
                        <p>50.4K Tweets</p>
                    </div>
                    <img src={more} alt="" />
                </div>
                <div className='main-right-trends-item'>
                    <div className='main-right-trends-item-text'>
                        <p>Trending in Germany</p>
                        <h4>Revolution</h4>
                        <p>50.4K Tweets</p>
                    </div>
                    <img src={more} alt="" />
                </div>
                <div className='main-right-trends-item'>
                    <div className='main-right-trends-item-text'>
                        <p>Trending in Germany</p>
                        <h4>Revolution</h4>
                        <p>50.4K Tweets</p>
                    </div>
                    <img src={more} alt="" />
                </div>
                <a className='main-right-trends-link'>Show more</a>
            </div>
            {
                token ? <RightLikes/> : ''
            }
        </div>
    );
}

export default MainRight;
