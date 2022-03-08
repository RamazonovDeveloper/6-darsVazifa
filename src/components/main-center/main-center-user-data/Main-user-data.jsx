import React from 'react';
import './main-user-data.scss'
import image from '../../../img/main-image.png'
import gif from '../../../img/main-gif.png'
import stats from '../../../img/main-stats.png'
import smile from '../../../img/main-smile.png'
import sche from '../../../img/main-sche.png'
import user from '../../../img/user.png'
import sta from '../../../img/home-sta.png'
import more from '../../../img/left-user-more.png'
import chat from '../../../img/home-chat.png'
import retweet from '../../../img/retweet.png'
import like from '../../../img/like.png'
import share from '../../../img/share.png'
import friend1 from '../../../img/friend1.png'
import friend2 from '../../../img/friend2.png'
import friend3 from '../../../img/friend3.png'
import shashlik from '../../../img/shashlikkk.png'

const MainUserData = () => {
    return (
        <div className='main'>
            <div className='main-what'>
                <img src={user} alt="" />
                <div>
                    <h3>What’s happening</h3>
                    <div>
                        <img src={image} alt="" />
                        <img src={gif} alt="" />
                        <img src={stats} alt="" />
                        <img src={smile} alt="" />
                        <img src={sche} alt="" />
                    </div>
                    <button>Tweet</button>
                </div>
            </div>
            <div className='main-friend'>
                <img src={friend1} alt="" />
                <div>
                    <h3>Designsta <span>@inner · 25m</span></h3>
                    <p>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
                    <div>
                        <img src={chat} alt="" />
                        <img src={retweet} alt="" />
                        <img src={like} alt="" />
                        <img src={share} alt="" />
                        <img src={sta} alt="" />
                    </div>
                </div>
                <img src={more} alt="" />
            </div>
            <div className='main-friend'>
                <img src={friend2} alt="" />
                <div>
                    <h3>cloutexhibition <span>@RajLahoti · 22m</span></h3>
                    <p>YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>
                    <div>
                        <img src={chat} alt="" />
                        <img src={retweet} alt="" />
                        <img src={like} alt="" />
                        <img src={share} alt="" />
                        <img src={sta} alt="" />
                    </div>
                </div>
                <img src={more} alt="" />
            </div>
            <div className='main-friend'>
                <img src={friend3} alt="" />
                <div>
                    <h3>cloutexhibition <span>@RajLahoti · 22m</span></h3>
                    <p>Обетда..... </p>
                    <p>Кечиринглар</p>
                    <img src={shashlik} alt="" />
                    <div>
                        <img src={chat} alt="" />
                        <img src={retweet} alt="" />
                        <img src={like} alt="" />
                        <img src={share} alt="" />
                        <img src={sta} alt="" />
                    </div>
                </div>
                <img src={more} alt="" />
            </div>
        </div>
    );
}

export default MainUserData;
