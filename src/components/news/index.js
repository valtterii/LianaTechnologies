import React from 'react'
import './main.css'
import { NewsItem } from '../../components'
import { useState } from 'react';

function News() {
    const [news, setNews] = useState([
        { id: 1, date: "27.07.2016", content: "Liana Technologies and Encode Solutions merge to create unique mobile solutions" },
        { id: 2, date: "28.01.2016", content: "From a local startup to a global player: Liana Technologies among the forerunners of digital marketing technology" },
        { id: 3,  date: "02.07.2015", content: "Liana Technologies Hong Kong launched a series of digital marketing events in June" },
    ]);

    return (
        <section data-aos="fade-right" data-aos-mirror="true" data-aos-once="false" className='news_container'>
            <div className='news_header'>
                <h1>Latest news</h1>
            </div>
            <div className='news'>
                <div className='news_grid'>
                    {news && news.map(item =>
                        <NewsItem key={item.id} date={item.date} content={item.content} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default News
