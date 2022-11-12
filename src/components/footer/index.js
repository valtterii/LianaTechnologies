import React from 'react'
import './main.css'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import linkedin from '../../images/linkedin.png'
import { Button } from '../../components'

function Footer() {
  return (
    <footer className='footer_container'>
        <div className='footer'>
            <div className='footer_left'>
              <div className='footer_header'>Liana Technologies</div>
              <div className='footer_info'>
                <ul>
                  <li style={{fontWeight: "bold"}}>Sales and inquiries</li>
                  <li>Email: sales@liantech.com</li>
                  <li>Phone: +358 10 387 7053</li>
                  <Button class="btn_footer" text="Contact us" />
                </ul>
              </div>
            </div>
            <div className='footer_right'>
              <div>
                <ul>
                  <a href="#"><li>Company</li></a>
                  <a href="#"><li>Products</li></a>
                  <a href="#"><li>Contact us</li></a>
                  <a href="#"><li>News</li></a>
                  <a href="#"><li>Intranet</li></a>
                </ul>
                <div className='footer_icons'>
                  <a target={"_blank"} href="https://www.facebook.com/LianaTechFI/"><img src={facebook} /></a>
                  <a target={"_blank"} href="https://twitter.com/lianatech_fi?lang=fi"><img src={twitter} /></a>
                  <a target={"_blank"} href="https://www.linkedin.com/company/liana-technologies"><img src={linkedin} /></a>
                </div>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer