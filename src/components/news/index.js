import React from 'react'
import './main.css'

function News() {
    const news = {
        news_1: {
            date: "27.07.2016",
            content: "Liana Technologies and Encode Solutions merge to create unique mobile solutions"
        },
        news_2: {
            date: "28.01.2016",
            content: "From a local startup to a global player: Liana Technologies among the forerunners of digital marketing technology"
        },
        news_3: {
            date: "02.07.2015",
            content: "Liana Technologies Hong Kong launched a series of digital marketing events in June"
        },
    }
    return (
        <section data-aos="fade-right" data-aos-mirror="true" data-aos-once="false" className='news_container'>
            <div className='news_header'>
                <h1>Latest news</h1>
            </div>
            <div className='news'>
                <div className='news_grid'>
                    <a href="#">
                        <div className='news_item'>
                            <p><span className='date'>{news.news_1.date}</span> <br /> {news.news_1.content} </p>
                        </div>
                    </a>
                    <a href="#">
                        <div className='news_item'>
                            <p><span className='date'>{news.news_2.date}</span> <br /> {news.news_2.content}                        </p>
                        </div>
                    </a>
                    <a href="#">
                        <div className='news_item'>
                            <p><span className='date'>{news.news_3.date}</span> <br /> {news.news_3.content}                        </p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default News