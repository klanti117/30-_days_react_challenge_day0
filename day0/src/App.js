import logo from './logo2.png';
import './App.css';
import Card from './components/card'

function App() {
  let items = [1,2,3,4.5,6]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* TODO: these br are here so that the logo doesnot rotate over text */}
      <br/>
      <br/>
      <br/>
      <h1>Day3: Random Color </h1>
      {
        items.map(()=><Card/>)
      }
    </div>
  );
}

export default App;
