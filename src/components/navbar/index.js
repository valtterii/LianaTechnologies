import React, { useState } from 'react'
import './main.css'
import logo from '../../images/lianatech_logo.svg'

function Navbar() {
    const [click, setClick] = useState(false);

    function handleClick() {
        setClick(!click);
    }

    return (
        <nav className='navbar_container'>
            <div className='navbar'>
                <div className='logo'>
                    <a href='/'>
                        <img width={"140px"} src={logo} />
                    </a>
                </div>
                <div className='navbar_links'>
                    <a href='#'>Company</a>
                    <a href='#'>Products</a>
                    <a href='#'>Contact Us</a>
                </div>
                <div className='space'></div>
                <div className='search'>
                    <input type="text" placeholder='Search' />
                    <button className='btn'>Search</button>
                </div>
                <div className='mobile' style={{display: "none"}}>
                    <button onClick={handleClick} className='mobile_navbar'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
                <div className={click ? "show" : "hidden"}>
                    <div className='mobile_menu'>
                        <ul>
                            <a href='#'><li>Company</li></a>
                            <a href='#'><li>Products</li></a>
                            <a href='#'><li>Contact Us</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar