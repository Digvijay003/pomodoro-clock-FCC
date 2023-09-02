import React from 'react'
import { formatTime } from '../helpers/formatTime'

export default function ClockDisplay({displayState}) {
  return (
    <div>
        <h3 id='timer-label'>{displayState.type}</h3>
        <span id='time-left'>{formatTime(displayState.timerValue)}</span>

    </div>
  )
}
