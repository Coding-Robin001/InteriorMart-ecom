import React, {useEffect, useState} from 'react'
import '../../../styleSheets/Clock.css'

const Clock = () => {
    let [days,setDays]= useState()
    let [hours,setHours]= useState()
    let [minutes,setMinutes]= useState()
    let [seconds,setSeconds]= useState()

    let intervals;

    const countDown = () => {
        const destination = new Date('sep 12, 2024').getTime()

        intervals = setInterval(()=> {
            const now = new Date().getTime()
            const different = destination - now
            const days = Math.floor(different / (1000 * 60 * 60 * 24))
            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60 ))
            const seconds = Math.floor(different % (1000 * 60 ) / 1000)

            if (destination < 0) clearInterval(intervals.current)
            else{
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        })
    }

    useEffect(() => {
        countDown()
    }, [])


    return (
        <div className='clock__wrapper'>
            <div className="clock__data">
                <div className="center">
                    <h1>{days}</h1>
                    <h5>Days</h5>
                </div>
                <span>:</span>
            </div>

            <div className="clock__data">
                <div className="center">
                    <h1>{hours}</h1>
                    <h5>Hours</h5>
                </div>
                <span>:</span>
            </div>


            <div className="clock__data">
                <div className="center">
                    <h1>{minutes}</h1>
                    <h5>Minutes</h5>
                </div>
                <span>:</span>
            </div>


            <div className="clock__data">
                <div className="center">
                    <h1>{seconds}</h1>
                    <h5>Seconds</h5>
                </div>
                <span>:</span>
            </div>

        </div>
    )
}

export default Clock