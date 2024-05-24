import { useEffect, useState } from 'react'
import s from './Counter.module.css'



export const Counter = () => {
    
 const [count, setCount] = useState(() => {
    const savedCount = window.localStorage.getItem('counter')
    if(savedCount !== null) {
      return JSON.parse(savedCount)
    }
    return 0
 })
 const [step, setStep] = useState(1) 

useEffect(()=>{
  console.log('Hello COUNTER')
}, [])

useEffect(()=>{
  console.log('Counter is changed', count);
},[count])

useEffect(()=>{
  console.log('step is changed', step);
},[step])

useEffect(()=>{
    console.log('wow is changed', step, count);
},[count, step])

useEffect(()=>{
  if (count === 5) {
    alert('ви досягли 5')
  }
  if (count === -999) {
    setCount(0)
  }
},[count])

useEffect (()=>{
  window.localStorage.setItem('counter', count)
},[count])



  const handleIncrement = () => {
    setCount (prev => prev + step)
  }
  const handleDecrement = () => {
    if (count <= -1000) {
      return
    }
    setCount (prev => prev - step)
  }
  const handleReset = () => {
    setCount(0)
    setStep(1)
  }

  return (
    <div className={s.container}>
      <div className={s.wraper}> 
        <h1 className={s.title}>{count}</h1>

        <input value={step} onChange={e => setStep(+e.target.value)}/>
        <div className={s.wrap_wrap}>
          <button className={s.button_wrap} onClick={handleDecrement} >minus</button>
          <button className={s.button_wrap} onClick={handleReset} >reset</button>
          <button disabled={count === 10000} className={s.button_wrap} onClick={handleIncrement}>plus</button>
        </div>
  </div>
</div>
  )
}

export default Counter