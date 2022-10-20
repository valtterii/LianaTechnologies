import React from 'react'
import './main.css'

function Topbar() {
  return (
    <div className='topbar_container'>
        <div className='topbar'>
            <div className='topbar_links'>
                <a href='#'>
                    News
                </a>
                <a href='#'>
                    Intranet
                </a>
                <select>
                    <option>In English</option>
                    <option>In Finnish</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Topbar