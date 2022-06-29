import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)
    const [showTime, setShowTime] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)

    }
    const start = () => {
        setShowTime(true)
        // stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)

    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }
    let time:any = [date.getHours(),date.getMinutes(),date.getSeconds()];
    if(time[0] < 10){time[0] = "0"+ time[0];}
    if(time[1] < 10){time[1] = "0"+ time[1];}
    if(time[2] < 10){time[2] = "0"+ time[2];}
    let current_time = [time[0],time[1],time[2]].join(':');

    let DATE:any = [date.getDay(),date.getMonth(),date.getFullYear()]
    if(DATE[0] < 10){DATE[0] = "0"+ DATE[0];}
    if(DATE[1] < 10){DATE[1] = "0"+ DATE[1];}
    if(DATE[2] < 10){DATE[2] = "0"+ DATE[2];}
    let current_date = [DATE[0],DATE[1],DATE[2]].join('.');

    const stringTime = current_time // fix with date
    const stringDate = current_date

    return (
        <div>
            <div>Time:</div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {showTime ? stringTime: '-- : -- : --'}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
