import React from 'react'

export default function TimerSetter({type,value,setValue}) {
  return (
    <div>
        <h3 id='session-label'>{type}</h3>
        <div className='time-setter-buttons'>

       
        <button onClick={()=>(setValue(value-1))}id='session-decrement'>-</button>
        <span id='session-length'>{value}</span>
        <button onClick={()=>(setValue((value+1)))}id='session-increment'>+</button>
        </div>
    </div>
  )
}
