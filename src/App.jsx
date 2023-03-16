import React, {useState} from 'react';
import nounsData from './nounsData';

function App() {
  const nouns = nounsData;
  const value = Math.floor(Math.random() * nouns.length);
  const noun = nouns[value].noun;
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);

  const check = (e) => {
    console.log(e.target.value);
    if (nouns[value].gender === e.target.value) {
      setRight(oldValue => {
        const newValue = oldValue + 1;
        return newValue;
      })
    } else {
      setWrong(oldValue => {
        const newValue = oldValue + 1;
        return newValue;
      })
    }
  }

  return (
    <main className='main'>
      <div className='headline'>
        <h2>die der das</h2>
        <p>Some common German nouns to strengthen your memory for their grammatical gender!</p>
      </div>
      <div className='score'>
        <h3>correct: {right}</h3>
        <h3>wrong: {wrong}</h3>
      </div>
      <div className='container'>
        <div className='card'>
          <h1>{noun}</h1>
        </div>
        <div className='btn-container'>
          <button className='btn' onClick={check} value="die">die</button>
          <button className='btn' onClick={check} value="der">der</button>
          <button className='btn' onClick={check} value="das">das</button>
        </div>
      </div>
    </main>
  )
}

export default App
