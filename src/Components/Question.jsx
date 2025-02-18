import React, { useState } from 'react'
import AccordionHOC from '../HOCs/AccordionHOC';

 function Question({questions , toggleInfo}) {

    console.log(questions);

  

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



export default AccordionHOC(Question)