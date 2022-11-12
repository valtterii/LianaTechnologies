import React from 'react'
import './main.css'
import bosch from '../../images/bosch.png'
import bodyshop from '../../images/bodyshop.png'
import laplandhotels from '../../images/laplandhotels.png'
import ikea from '../../images/ikea.png'

import { ReferencesItem } from '../../components'

function References() {
  return (
    <section data-aos="fade-left" data-aos-mirror="true" data-aos-once="false" className='references_container'>
        <div className='references_header'>
            <h1>References</h1>
        </div>
        <div className='references'>
            <div className='references_grid'>
                <ReferencesItem image={bosch} header="Robert Bosch" text="Bosch is a multinational engineering and electronics company." />
                <ReferencesItem image={bodyshop} header="The Body Shop" text="The Body Shop is a global beauty brand and it has more than 3,000 stores in more than 60 countries." />
                <ReferencesItem image={laplandhotels} header="The Body Shop" text="Lapland Hotels is the largest and the most diverse hotel chain in Lapland." />
                <ReferencesItem image={ikea} header="IKEA" text="IKEA is a multinational furniture store." />
            </div>
        </div>
    </section>
  )
}

export default References