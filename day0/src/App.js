import logo from './logo2.png';
import './App.css';
import { useState } from 'react'
function App() {
  const [name, setName] = useState('')
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
        <input type={'text'} placeholder={'Type somthing here'} onChange={e => setName(e.target.value)} />
        <h3>{name.toUpperCase()}</h3>
      </div>
    </div>
  );
}

export default App;
