import React, { useState } from 'react'
import questions from './question.json'

function Question({setIsOver,setScore}) {
    const [currentIndex, setIndex] = useState(0)    


    function handleClick(selectedOption){
        if (selectedOption=== questions[currentIndex].answer) {
            setScore(prev => prev+1)
        }

        if (currentIndex < questions.length -1) {
            setIndex(prev=> prev+1)
        }
        else{
            setIsOver(true)
        }

        
    }


    return (
        <div>
            <h2>{questions[currentIndex].question}</h2>

            <div className="flex flex-col items-center gap-3 mt-8 mb-8">
                {questions[currentIndex].options.map((option) => (
                    <button
                        key={option}
                        className="w-64 bg-[tomato] text-white py-2 rounded"
                        onClick={()=>{
                        handleClick(option)}}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>

    )
}

export default Question
