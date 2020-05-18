import React, { useState } from 'react'
import Statistics from './Components/Statistics'
import Button from './Components/Button';
import './App.css';
import Feedback from './Components/Feedback';
import Bad from './Components/Bad';
import Neutral from './Components/Neutral';
import Good from './Components/Good';



function App() {
  const [bad, setBad] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  return (
    <div className="App">
      <Feedback />
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <Statistics />
      <Good good={good} />
      <Neutral neutral={neutral} />
      <Bad bad={bad} />
    </div>
  );
}

export default App;
