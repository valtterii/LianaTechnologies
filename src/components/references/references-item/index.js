import React from 'react'
import './main.css'

function ReferencesItem(props) {
  return (
      <div className='references_item'>
          <img src={props.image} />
          <div className='line'></div>
          <div className='small_header'>
              {props.header}
          </div>
          <p>{props.text}</p>
      </div>
  )
}

export default ReferencesItem