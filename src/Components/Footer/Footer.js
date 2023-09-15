import React from 'react';
import FooterInfo from './FooterInfo';
import FooterAchievements from './FooterAchievements';
import FooterCopyRight from './FooterCopyRight';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer-container-wrapper mt-3 pt-2'>
            <div className="footer-black mt-4">
                <div className="footer-container">
                    <FooterInfo></FooterInfo>
                    <FooterAchievements></FooterAchievements>
                </div>
                <FooterCopyRight></FooterCopyRight>
            </div>
        </div>
    );
};

export default Footer;