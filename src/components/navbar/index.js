import React from 'react'
import './main.css'
import logo from '../../images/lianatech_logo.svg'
import { Mobile, Link, Button } from '../../components'

function Navbar() {
    return (
        <nav className='navbar_container'>
            <div className='navbar'>
                <div className='logo'>
                    <a href='/'>
                        <img width={"140px"} src={logo} />
                    </a>
                </div>
                <div className='navbar_links'>
                    <Link url="#" text="Company" />
                    <Link url="#" text="Products" />
                    <Link url="#" text="Contact Us" />
                </div>
                <div className='space'></div>
                <div className='search'>
                    <input type="text" placeholder='Search' />
                    <Button class="" text="Search" />
                </div>
                <Mobile />
            </div>
        </nav>
    )
}

export default Navbar