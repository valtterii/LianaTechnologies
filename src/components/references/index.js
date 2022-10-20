import React from 'react'
import './main.css'
import bosch from '../../images/bosch.png'
import bodyshop from '../../images/bodyshop.png'
import laplandhotels from '../../images/laplandhotels.png'
import ikea from '../../images/ikea.png'

function References() {
  return (
    <section data-aos="fade-left" data-aos-mirror="true" data-aos-once="false" className='references_container'>
        <div className='references_header'>
            <h1>References</h1>
        </div>
        <div className='references'>
            <div className='references_grid'>
                <div className='references_box'>
                    <div className='references_item'>
                        <img src={bosch} />
                        <div className='line'></div>
                        <div className='small_header'>Robert Bosch</div>
                        <p>Bosch is a multinational engineering and electronics company.</p>
                    </div>
                </div>
                <div className='references_box'>
                    <div className='references_item'>
                        <img src={bodyshop} />
                        <div className='line'></div>
                        <div className='small_header'>The Body Shop</div>
                        <p>The Body Shop is a global beauty brand and it has more than 3,000 stores in more than 60 countries.</p>
                    </div>
                </div>
                <div className='references_box'>
                    <div className='references_item'>
                        <img src={laplandhotels} />
                        <div className='line'></div>
                        <div className='small_header'>Lapland Hotels</div>
                        <p>Lapland Hotels is the largest and the most diverse hotel chain in Lapland.</p>
                    </div>
                </div>
                <div className='references_box'>
                    <div className='references_item'>
                        <img src={ikea} />
                        <div className='line'></div>
                        <div className='small_header'>IKEA</div>
                        <p>IKEA is a multinational furniture store.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default References