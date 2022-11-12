import React from 'react'

function Link(props) {
  return (
    <>
      <a className='link' href={props.url}>{props.text}</a>
    </>
  )
}

export default Link
