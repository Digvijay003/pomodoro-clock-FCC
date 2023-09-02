export const formatTime=(time)=>{
   
    const minutes=Math.floor(time / 60)
    const seconds=time % 60
    console.log(minutes,'minutes')
    console.log(seconds,'seconds')
    return `${minutes < 10 ? "0"+minutes.toString():minutes}:${seconds < 10 ? "0"+seconds.toString():seconds}`

}