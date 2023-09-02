import React from 'react'

export default function Buttons({startStop,reset,displayState}) {
  return (
    <div className='play-reset-buttons'>
        <button onClick={startStop}id='start_stop'>{displayState.isRunning?'Pause':'Play'}</button>
        <button onClick={reset}id='reset'>Reset</button>

    </div>
  )
}
