import React, { useState, useEffect, useRef } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const timerRef = useRef()

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(timerRef.current)
        }
    }, [])

    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => clearInterval(timerRef.current)}>Clear timer</button>
        </div>
    )
}

export default HookTimer
