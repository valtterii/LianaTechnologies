import React from 'react'
import './main.css'

function Button(props) {
  return (
    <button className={`btn ${props.class}`}>{props.text}</button>
  )
}

export default Button