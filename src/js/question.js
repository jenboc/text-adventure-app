import React from 'react'

function Question({currentQuestionData, setCurrentQuestion}){
  return (<div>
    <div>
    {currentQuestionData.description}
    </div>
    <div>
    {
      currentQuestionData.availableMoves.map(move => {
        return <button key={move.code} onClick={() => {setCurrentQuestion(move.relatedId)}}>{move.description}</button>
      })
    }
    </div>
    </div>);
}

export default Question;