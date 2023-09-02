
import { useEffect, useState } from 'react'
import './App.css'
import TimerSetter from './components/TimerSetter'
import ClockDisplay from './components/ClockDisplay'
import Buttons from './components/Buttons'
import alarmSound from './assets/alarmSound.mp3'
import TimerSetter2 from './components/TimerSetter2'

function App() {
  const interval=60
  const [breakLength,setBreakLength]=useState(5)
  const [sessionLength,setSessionLength]=useState(25)
  const [displayState,setDisplayState]=useState({
    isRunning:false,
    timerValue:sessionLength*60,
    type:'session'
  })
  const decrementTimer=()=>{
    setDisplayState((prev=>(
      {
        ...prev,
        timerValue:prev.timerValue-1
      }
    )))
     }

  useEffect(()=>{
    let interval
    if(!displayState.isRunning){
      return

    }
    if(displayState.isRunning){
      
      interval=setInterval(decrementTimer,1000)
    

    }
   
   

    return ()=>{
      clearInterval(interval)
    }

  },[displayState.isRunning])

  useEffect(()=>{
    const audio=document.getElementById('beep')
  if(displayState.timerValue === 0){
    
    audio.play()
    audio.currentTime = 2
    setTimeout(()=>{

      audio.pause()
      audio.currentTime = 0

    },3000)
    setDisplayState((prev)=>({
      ...prev,
      type:prev.type==='break'?'session':'break',
      timerValue:prev.type === 'break'?(sessionLength*60):(breakLength*60)
    }))
  }

  },[displayState,breakLength,sessionLength])

  const changeBreakTime=(time)=>{
    if(displayState.isRunning){
      return
    }
    if(time<=0 || time>(20*60)){
      return
    }
    console.log(time,'timeformat')
    setBreakLength(time)
  }

  const changeSessionTime=(time)=>{
    if(displayState.isRunning){
      return
    }
    if(time<=0 || time>(30*60)){
      return
    }
    setSessionLength(time)
    setDisplayState({
      ...displayState,
      timerValue:time*60
    })

  }

  const reset=()=>{
    const audio=document.getElementById('beep')
    audio.pause()
    audio.currentTime=0
    setBreakLength(5)
    setSessionLength(25)
    setDisplayState({
      type:'session',
      timerValue:25*60,
      isRunning:false
    })
  }

  const startStop=()=>{
   setDisplayState(prev=>(
    {
      ...prev,
      isRunning:!prev.isRunning
    }
   ))
  }


  return (
    <div className='clock'>
      <div>
      <h1>25 + 5 Clock</h1>

      </div>
     
      <div className='time-setter'>
      <TimerSetter2
    type='break'
    value={breakLength}
    setValue={changeBreakTime}
    
    />
    <TimerSetter
    type='session'
    value={sessionLength}
    setValue={changeSessionTime}
    />

      </div>
      <div>
      <ClockDisplay displayState={displayState}/>

      </div>
   
   <div>
   <Buttons
    reset={reset}
    startStop={startStop}
    displayState={displayState}/>

   </div>
   
    <audio id='beep'src={alarmSound}/>
    </div>
  )
}

export default App
