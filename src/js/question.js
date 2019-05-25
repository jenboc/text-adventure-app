import React from 'react'

function Question({currentQuestionData, setCurrentQuestion}){
  return (<div class="questionData">
    <div className="question">
    {currentQuestionData.description}
    </div>
    <div>
    {
      currentQuestionData.availableMoves.map(move => {
        return <button className="optionButton" key={move.code} onClick={() => {setCurrentQuestion(move.relatedId)}}>{move.description}</button>
      })
    }
    </div>
    </div>);
}

export default Question;