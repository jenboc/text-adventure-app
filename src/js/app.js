import React, {useState, useEffect} from 'react'
import Question from './question'
import story from '../stories/superhero.json'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [currentQuestionData, setCurrentQuestionData] = useState({availableMoves: []})

  useEffect(() => {
    let question = story[currentQuestion]
    setCurrentQuestionData(question)
  })

  return (<div><h1>Superhero Story</h1>
      <Question currentQuestionData={currentQuestionData} setCurrentQuestion={setCurrentQuestion} />
    </div>);
}

export default App;