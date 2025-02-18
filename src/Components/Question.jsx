import React, { useState } from 'react'
import { Datas } from '../Datas.js/Datas'

export default function Question() {

    const [questions, setQuestions] = useState(Datas.map(data => ({ ...data, isShowing: false })))

    const toggleInfo = (id) => {
        setQuestions(prevQuestions =>
            prevQuestions.map(question =>
                question.id === id ? { ...question, isShowing: !question.isShowing } : question
            )
        )
    }

    return (
        <div className='w-[60%] flex justify-between mt-36 bg-white p-4'>
            <h1 className='font-bold'>Questions and Answers <br /> About Programming</h1>
            <div className='flex flex-col gap-2 w-full p-1'>
                {questions.map(q => (
                    <div onClick={() => toggleInfo(q.id)} key={q.id} className='rounded-md p-2 bg-yellow-200 w-full flex flex-col cursor-pointer'>
                        <p>{q.title}</p>
                        {q.isShowing && <p>{q.info}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}