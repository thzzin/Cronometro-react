import React, { useState } from 'react'
import Display from './Components/Display';
import BtnDisplay from './Components/BtnDisplay';
import './App.css';

function App() {
  const [time, setTime] = useState({ms:0, s:0, m: 0, h:0})

  const [interv, setinterv] = useState()

  const [status, setstatus] = useState(0)

  const start = () => {
    run(); 
    setstatus(1)
    setinterv(setInterval(run, 10));
  }
  var updatedms = time.ms, updateds = time.s, updatedm = time.m, updatedh = time.h
  const run = () => {
    if(updatedm === 60){
      updatedh++
      updatedm = 0
    }
    if(updateds === 60){
      updatedm++
      updateds = 0
    }
    if(updatedms === 100){
      updateds++
      updatedms = 0
    }
    updatedms++
    return setTime({ms:updatedms, s:updateds, m:updatedm, h:updatedh})
  }

  const stop = () => {
    clearInterval(interv); 
    setstatus(2)
  }
  
  const reset = () => {
    clearInterval(interv); 
    setstatus(0)
    setTime({ms:0, s:0, m:0, h:0})
  }
  const resume = () => start()
  
  return (
    <div className="main-section">
      <div className='clock-holder' >
          <div className='stopwatch' > 
              <Display time={time} />
              <BtnDisplay resume={resume} reset={reset} stop={stop} status={status} start={start} />
          </div>
      </div>
    </div>
  );
}

export default App;
