import React, { useEffect, useRef, useState } from 'react'

const StopWatch = () => {
    const [time,setTime] = useState(0)
    const [lap,setLap] =useState([])

    useEffect(()=>{
        timeInc()
        return () => clearInterval(timeHandler.current)
    })

    let timeHandler = useRef()

    const timeInc = () =>{
        timeHandler.current = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        }, 1000);
        return () => timeHandler.current
    }

    const lapFun = () =>{
        setLap((prevLap)=> [...prevLap,time])
    }
    const handleRestart = () => {
        setTime(0)
        setLap([])
    }

  return (
    <div>
        <h1>{time}</h1>
        <button 
           onClick={()=> handleRestart()} 
        >Restart</button>
        <button onClick={() => clearInterval(timeHandler.current)}>Pause</button>
        <button onClick={lapFun}>Lap</button>
        <p>{lap}</p>
    </div>
  )
}

export default StopWatch