import React, { useState } from 'react';

//? import css
import "./Header.css";
import { Image } from 'semantic-ui-react';
import Portfolio from "../../assets/logo.png";

import { ReactComponent as Toggle } from "../../assets/menux.svg";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = () => {
        setIsOpen(prevState => !prevState)
    }
    return (
        <div className="_header">
            <div className="row">
                <Image src={Portfolio} alt="logo" />
                <ul>
                    <li>
                        <a href="/About">About</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                    <li>
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <div class="wrapper">
                        <a href="/contact"><span>Contact Me</span></a>
                    </div>
                </ul>
                <Toggle className="_toggle" onClick={handleMenu} />
                <div className={isOpen ? "mobile_menu_open" : "mobile_menu_open close"}>
                    <ul>
                        <li>
                            <a href="/About">About</a>
                        </li>
                        <li>
                            <a href="/services">Services</a>
                        </li>
                        <li>
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a style={{
                                color: "#ec5b53"
                            }} href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
