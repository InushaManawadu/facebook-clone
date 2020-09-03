import React from 'react'; 
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';

function Header() {
    return (
        <div className='header'>

            <div className="header__left">
                <img src="https://img.icons8.com/cute-clipart/64/000000/facebook-new.png"/>
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            
            <div className="header__middle">
                <div className="header__option">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleOutlinedIcon fontSize="large" />
                </div>
            </div>
            
            <div className="header__right">

            </div>
        </div>
    )
}

export default Header
