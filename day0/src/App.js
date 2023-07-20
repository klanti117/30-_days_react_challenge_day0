import logo from './logo2.png';
import './App.css';
import { useState } from 'react'

function App() {
  const [time, showTime] =useState('')
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
      <button onClick={()=>showTime(timeInString)}>Show Time !!</button>
      <p>{time}</p>
    </div>
  );
}

export default App;
