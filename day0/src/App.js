import logo from './logo2.png';
import './App.css';
import { useState } from 'react'

function App() {
  const [time, showTime] =useState(false)
  let myTime = new Date()
  let timeInString = myTime.toString()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* TODO: these br are here so that the logo doesnot rotate over text */}
      <br/>
      <br/>
      <br/>
      <h1>Day1: Show time </h1>
      <div class="content">
        <button onClick={()=>showTime(!time)}>
          {time ? 'Hide Time !!' : 'Show Time !!'}
        </button>
        <>
          {time ? <p>{timeInString}</p>:null}
        </>
        </div>
    </div>
  );
}

export default App;
