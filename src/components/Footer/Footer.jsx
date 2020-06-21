import React from 'react';
import { Image, Icon } from "semantic-ui-react";

//? import css
import "./Footer.css";

import Logo from "../../assets/logo_footer.png";

const Footer = () => {
    return (
        <div className="_footer">
            <div className="row">
                <div className="top">
                    <Image src={Logo} alt="logo" />
                    <h1>oussamabngdev@gmail.com</h1>
                    <p>Rue 400 logements bloc A1 n°6 - Mostaganem - Algeria</p>
                    <p>Hay zitoun chateau - Ain temouchent - Algeria</p>
                </div>
                <div className="bottom">
                    <p>Copyright ©2020 Qll right reserved</p>
                    <div className="social">
                        <Icon name='facebook' />
                        <Icon name='twitter' />
                        <Icon name='google plus' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
