import logo from './logo2.png';
import './App.css';
import { useState } from 'react'
import { strToMorseCode } from './util/encrypt';
function App() {
  const [morseCode, setMorseCode] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* TODO: these br are here so that the logo doesnot rotate over text */}
      <br/>
      <br/>
      <br/>
      <h1>Day2: Morse code </h1>
      <div class="content">
        <h3>Type string without number please</h3>
        <input type={'text'} placeholder={'Type somthing here'} onChange={e => setMorseCode(strToMorseCode(e.target.value))} />
        <h3>{morseCode}</h3>
      </div>
    </div>
  );
}

export default App;
