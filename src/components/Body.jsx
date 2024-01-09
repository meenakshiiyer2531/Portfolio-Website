import { useState } from 'react'
import TestSpan from './TestSpan'



function Body() {
  const sentence = "Hello Meenu".split("");
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
      {sentence.map((letter,index) =>{
        return(
          <TestSpan key={index}>
            {letter === " "? "\u00A0" : letter}
          </TestSpan>
        )
      })}
     </div>
    </>
  )
}

export default Body
