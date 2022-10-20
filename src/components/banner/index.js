import React from 'react'
import './main.css'

function Banner(props) {
  return (
    <div className='banner_container'>
        <div className='banner'>
            <div className='banner_content'>
                <div data-aos="zoom-out-up" data-aos-mirror="true" data-aos-once="false">
                    <div className='banner_title'>Software fueling digital marketing</div>
                    <button className='btn btn_banner'>Learn more</button>
                </div>
            </div>
            <img src={props.image} />
        </div>
    </div>
  )
}

export default Banner