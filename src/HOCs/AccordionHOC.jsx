import React, { useState } from 'react'
import { Datas } from '../Datas.js/Datas'

export default function AccordionHOC(OriginalComponent) {

    function newComponent(props){



        console.log(props);
        const [questions, setQuestions] = useState(Datas.map(data => ({ ...data, isShowing: false })))


        const toggleInfo = (id) => {
            setQuestions(prevQuestions =>
                prevQuestions.map(question =>
                    question.id === id ? { ...question, isShowing: !question.isShowing } : question
                )
            )
        }






        return <OriginalComponent questions={questions} toggleInfo={toggleInfo}  />
    }



  return (
    newComponent
  )
}
