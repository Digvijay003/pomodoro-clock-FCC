import React from 'react'

export default function TimerSetter2({type,value,setValue}) {
  return (
    <div>
        <h3 id='break-label'>{type}</h3>
        <div className='time-setter-buttons'>

       
        <button onClick={()=>(setValue(value-1))}id='break-decrement'>-</button>
        <span id='break-length'>{value}</span>
        <button onClick={()=>(setValue((value+1)))}id='break-increment'>+</button>
        </div>
    </div>
  )
}
