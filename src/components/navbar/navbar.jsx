import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import './style.scss';

const Navbar = () =>
{
    const [showNav, setShowNav] = useState(false);
    const handleNavElement = () => setShowNav((showNav) => !showNav);
    return ( 
        <nav className={"navbar"}>
        <div className={"content"}>
            <div className={"logo"}>
                <img src={logo} alt="shortly logo"/>
            </div>
          <ul className={"menu_list"} id={`${showNav ? "active" : undefined}`}>
                <div
                    className={"icon"}
                    id={"cancel_btn"}
                    onClick={() => setShowNav((showNav) => !showNav)}>
                    <i className="fas fa-times fa-lg"></i>
                </div>
                    <ul className={"user_buttons"}>
                        <li className='text-[]'>Products</li>
                        <li className='text-[#242942]'>Features</li>
                        <li className='text-[#242942]'>Pricing</li>
                        <li onClick={handleNavElement}>
                            <a  href='#signup'>.</a>
                        </li>
                        <li onClick={handleNavElement}>
                            <a href='#login'>Login</a>
                        </li>

                </ul>
            </ul>
            <div
                className={"icon"}
                id={`${showNav && "hide"}`}
                onClick={() => setShowNav((showNav) => !showNav)}>
                <i className="fas fa-bars fa-lg"></i>
            </div>
        </div>
    </nav>
     );
}
 
export default Navbar;
