import logo from './logo.svg';
import './App.css';
import './Components/data'
import Tours from './Components/Tours'
import data from './Components/data'
function App() {
  return (
    <Tours data={data}/>
  )
}

export default App;
