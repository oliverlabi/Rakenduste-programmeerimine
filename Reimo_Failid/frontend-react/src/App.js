import { useState } from "react"
import './App.css';
import Palindrome from './components/Palindrome';
import Fun from './components/Fun';
import Greeting from './components/Greeting';

function App() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      { show && <h1>{ magicNumber }</h1> }
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber}
        show={show}
        setShow={setShow}
      />
      <Greeting name="Oliver" age="21"/>
      <Palindrome inputs="vanav"/>
    </div>
  );
}

export default App;
