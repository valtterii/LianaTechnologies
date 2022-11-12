import React from 'react'
import './main.css'

function AlbumItem(props) {
  return (
    <a href={props.url}>
        <div className='item'>
            <div className='item_header'>{props.text}</div>
            <img src={props.image} />
        </div>        
    </a>
  )
}

export default AlbumItem