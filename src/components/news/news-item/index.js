import React from 'react'
import './main.css'

function NewsItem(props) {
  return (
      <div className='news_item'>
          <p><span className='date'>{props.date}</span> <br /> {props.content} </p>
      </div>
  )
}

export default NewsItem