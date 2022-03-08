import React from 'react';
import m from '../../../img/right-likes-m.png'
import s from '../../../img/right-likes-s.png'
import './right-likes.scss'

const RightLikes = () => {
    return (
        <div className='likes'>
            <h3>You might like</h3>
            <div>
                <img src={m} alt="" />
                <div>
                    <h4>Mushtariy</h4>
                    <p>@Mushtar565266</p>
                </div>
                <button>Follow</button>
            </div>
            <div>
                <img src={s} alt="" />
                <div>
                    <h4>Shuxrat</h4>
                    <p>@mrshukhrat</p>
                </div>
                <button>Follow</button>
            </div>

            <a>Show more</a>
        </div>
    );
}

export default RightLikes;
