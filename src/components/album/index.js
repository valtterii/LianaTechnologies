import React from 'react'
import './main.css'

function Album(props) {
  return (
    <section className='album_container'>
        <div className='album_grid'>
            <a href="#">
                <div className='item'>
                    <div className='item_header'>Company</div>
                    <img src={props.image1} />
                </div>
            </a>
            <a href="#">
                <div className='item'>
                    <div className='item_header'>Products</div>
                    <img src={props.image2} />
                </div>
            </a>
            <a href="#">
                <div className='item'>
                    <div className='item_header'>Contact Us</div>
                    <img src={props.image3} />
                </div>
            </a>
        </div>
    </section>
  )
}

export default Album