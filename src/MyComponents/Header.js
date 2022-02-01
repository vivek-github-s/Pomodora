import React from 'react'
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import './Header.css'
import SettingsIcon from '@material-ui/icons/Settings';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <DevicesOtherIcon/>
                <h1> Pomodora</h1>
            </div>
            <div className="header__right">
                <div className="header__setting">
                    <SettingsIcon/> Setting
                </div> 
                <div className="header__login">
                    <FingerprintIcon/> Login
                </div>
            </div>
        </div>
    )
}

export default Header
