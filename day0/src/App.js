import logo from './logo2.png';
import './App.css';
import Button from './components/Button/Button'
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
      <Button showTime={showTime} time={time} buttonText={time? 'Hide Time':'Show Time'}/>
      <>
        {time? <TimesContainer/>:null}
      </>
    </div>
  );
}

export default App;
