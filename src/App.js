import React, {useState } from 'react';
import  Timer  from './Component/Timer';
import './App.css';

function App() {
  const [startTime] = useState(5)
  const [endTimes] = useState(25)

  return (
    <div className="App">
    <Timer startTime={startTime} endTimes={endTimes} />
    </div>
  );
}

export default App;