import './App.css';
const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

// const cardStyles = {
//   backgroundColor: '#93c572',
//   padding: '1rem',
//   border: '2px solid white',
//   color:'black'
// }

const containerStyles = {
  padding: '1rem',
  display:'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
}

const Number = ({number}) =>{
  return (
    <div style={{backgroundColor: number%2===0? 'purple': 'green', 
      padding: '1rem',
      border: '2px solid white',
      color:'black' 
    }}>{number}</div>
  )
}

const NumberList = ({numbers}) => {
  const numberList = numbers.map((number)=><Number number={number}/>)
  return (
    <div style={containerStyles}>{numberList}</div>
  )
}
function App() {
  return (
    <div className='App'>
      <h1>30 Days of React Challenge</h1>
      <p>Number Generator</p>
      <NumberList  numbers={numbers}/>
    </div>
  );
}

export default App;
