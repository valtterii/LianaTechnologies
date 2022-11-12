import React, { useState } from 'react'
import { Link } from '../../components'
import './main.css'

function Mobile() {
    const [click, setClick] = useState(false);

    function handleClick() {
        setClick((prev) => !prev);
    }

    return (
        <>
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
                    <li> <Link url="#" text="Company" /> </li>
                    <li> <Link url="#" text="Products" /> </li>
                    <li> <Link url="#" text="Contact Us" /> </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Mobile