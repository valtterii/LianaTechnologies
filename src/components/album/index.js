import React from 'react'
import './main.css'
import { AlbumItem } from '../../components'

function Album(props) {
  return (
    <section className='album_container'>
        <div className='album_grid'>
            <AlbumItem url="#" text="Company" image={props.image1} />
            <AlbumItem url="#" text="Products" image={props.image2} />
            <AlbumItem url="#" text="Contact U" image={props.image3} />
        </div>
    </section>
  )
}

export default Album