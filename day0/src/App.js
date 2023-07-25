import logo from './logo2.png';
import './App.css';
// import Button from './components/Button/Button'
import { useState } from 'react'
import TimesContainer from './components/TimesContainer/TimesContainer';

function App() {
  const [time, showTime] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* TODO: these br are here so that the logo doesnot rotate over text */}
      <br/>
      <br/>
      <br/>
      <h1>Day4: Show Time </h1>
      <button 
        onClick={()=>showTime(!time)}>{time? 'Hide Time':'Show Time'}</button>
      <>
      {time? <TimesContainer/>:null}
      </>
    </div>
  );
}

export default App;
