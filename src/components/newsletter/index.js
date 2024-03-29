import React from 'react'
import './main.css'
import { Button } from '../../components'

function Newsletter() {
  return (
    <section data-aos="fade-up" className='newsletter_container' >
        <div className='newsletter_header'>
            <h1>Subscribe to our newsletter</h1>
            <p>
              Follow our story and get the latest promotonial <br /> news about our products and events.
            </p>
        </div>
        <div className='newsletter'>
          <input type={"email"} placeholder='Your email address' />
          <Button class="btn_newsletter" text="Subscribe" />
        </div>
    </section >
  )
}

export default Newsletter