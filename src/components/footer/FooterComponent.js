import React from 'react'
import './FooterComponent.css';
import footerLogo from "../../pictures/white Shape 2.png"
import facebook from "../../pictures/facebook.png"

export default function FooterComponent() {
    return (
        <div className='footer-container'>
            <div className='inside-footer-div'>
                <div className='left-div-logo-and-nav'>
                    <picture className='footer-logo'><img src={footerLogo} alt='footer-log' /></picture>
                    <nav className='footer-nav'>
                        <ul>HOME</ul>
                        <ul>PORTFOLIO</ul>
                        <ul>CONTACT ME</ul>
                    </nav>
                </div>
                <div className='right-div-logo'><picture className='facebook-logo'><img src={facebook} alt='facebook logo' className='fbimg' /></picture></div>
            </div>
        </div>
    )
}
