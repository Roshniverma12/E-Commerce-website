import React from 'react';
import './Footer.css';
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import github_icon from "../Assets/github_icon.png"
import linkedin_icon from "../Assets/linkedin_icon.png"
import mail_icon from "../Assets/mail_icon.png"

export default function Footer() {
  return (
    <div className="footer">
        <div className='footer-logo'>
            <img src={footer_logo} alt="" />
            <p>ShopEase</p> 
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <a href='https://www.instagram.com/r_uby__12?igsh=MXhwZnFyYWQ4Zml4cw=='><img src={instagram_icon} alt="instagram" /></a>
            </div>
            <div className="footer-icons-container">
                <a href='https://www.linkedin.com/in/roshni-verma-b0615a219'><img src={linkedin_icon} alt="linkedin" style={{width: "38px"}}/></a>
            </div>
            <div className="footer-icons-container">
                <a href='https://github.com/Roshniverma12'><img src={github_icon} alt="github" style={{width: "38px"}}/></a>
            </div>
            <div className="footer-icons-container">
                <a href='mailto:roshaniverma1211@gmail.com'><img src={mail_icon} alt="gmail" style={{width: "38px"}}/></a>
            </div>
        </div>
        <div className='footer-copyright'>
                <hr />
                <p>
                    Copyright @ 2024 - All Rights Are Reserved.
                </p>
            </div>
    </div>
  )
}
