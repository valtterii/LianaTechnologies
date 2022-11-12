import React from 'react'
import './main.css'
import { Button } from '../../components'

function Banner(props) {
  return (
    <div className='banner_container'>
        <div className='banner'>
            <div className='banner_content'>
                <div data-aos="zoom-out-up" data-aos-mirror="true" data-aos-once="false">
                    <div className='banner_title'>Software fueling digital marketing</div>
                    <Button class="btn_banner" text="Learn More" />
                </div>
            </div>
            <img src={props.image} />
        </div>
    </div>
  )
}

export default Banner