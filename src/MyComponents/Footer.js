import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <p>Pomodora</p>
            <div className="footer__icons">
                <FacebookIcon fontSize='large'/>
                <InstagramIcon fontSize='large'/>
                <TwitterIcon fontSize='large'/>
                <EmailIcon fontSize='large'/>
            </div>
            <div className="footer__copyright">
                <p> &copy; All Copyright 2021. reserved</p>
            </div>
        </div>
    )
}

export default Footer
