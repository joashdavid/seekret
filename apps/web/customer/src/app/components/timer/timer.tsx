import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {
    // const {initialMinute = 0,initialSeconds = 0} = props
    const [seconds, setSeconds ] =  useState(120)
    useEffect(()=>{
    const myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval)
          }
    })

    return (
        <div>
        {  seconds === 0
            ? null
            : <div> {seconds < 10 ?  `0${seconds}` : seconds}</div> 
        }
        </div>
    )
}

export default Timer
