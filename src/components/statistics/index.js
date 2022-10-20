import React from 'react'
import './main.css'

function Statistics(props) {
    const data = {
        clients: {
            data: 3000,
        },
        employees: {
            data: 180,
        },
        dailyUsers: {
            data: 10000,
        },
    }

    return (
        <section className='statistics_container'>
            <div className='statistics'>
                <div className='icon'>
                    <img src={props.icon1} />
                    <div className='icon_stats'>
                        <span>{data.clients.data}</span>
                        <p>Clients</p>
                    </div>
                </div>
                <div className='icon'>
                    <img src={props.icon2} />
                    <div className='icon_stats'>
                        <span>{data.employees.data}</span>
                        <p>Employees</p>
                    </div>
                </div>
                <div className='icon'>
                    <img src={props.icon3} />
                    <div className='icon_stats'>
                        <span>{data.dailyUsers.data}</span>
                        <p>Daily users</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics