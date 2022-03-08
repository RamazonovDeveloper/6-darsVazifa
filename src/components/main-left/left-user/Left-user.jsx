import React from 'react';
import leftUser from '../../../img/left-user.png'
import userMore from '../../../img/left-user-more.png'
import './Left-user.css'

const LeftUser = () => {
    return (
        <div className='leftUser'>
            <img src={leftUser} alt="" />
            <div>
                <h5>Bobur</h5>
                <p>@bobur_mavlonov</p>
            </div>
            <img src={userMore} alt="" />
        </div>
    );
}

export default LeftUser;
