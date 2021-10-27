import React from 'react'
import { useState, useEffect } from 'react'

const Timer = (props: { onComplete: () => void ,time:number}) => {
    const [seconds, setSeconds ] =  useState(props.time)
    useEffect(()=>{
    const myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
                if(seconds === 1){
                    props.onComplete()
                }
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
