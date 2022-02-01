import React from 'react'
import './Timer.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Timer() {
    return (
        <div className='timer'>
           <Card className="timer__card">
            <CardContent>
                
                <div className='timer__buttons'>
                    <button className='timer__pamadora'>Pomodora</button>
                    <button className='timer__shortBreak'>Short Break</button>
                    <button className='timer__longBreak'>Long Break</button>
                </div>
                <div className="timer__timer">
                    <h1>15:00</h1>
                </div>
                
            </CardContent>
            <button className="timer__start">START</button>
        </Card>
        </div>
    )
}

export default Timer
