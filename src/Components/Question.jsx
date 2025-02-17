import React, { useState } from 'react'
import { Datas } from '../Datas.js/Datas'

export default function Question() {

    
    const [Question,setQusetion]=useState(Datas)
    const [isShowing,setIsshowing]=useState(false)

    console.log(Question);//array

    const showInfo= ()=>{

        setIsshowing(prev=>!prev)

    }


  return (

    
    <div className='w-[60%] flex justify-between mt-36 bg-white p-4'>

        
        <h1 className='font-bold'>Qusetions and Answers <br /> About programming</h1>

        <div className='flex flex-col gap-2 w-full  p-1'>
            {Question.map(q=>{
                return(
                    <div onClick={showInfo} key={q.id} className=' rounded-md p-2 bg-yellow-200 w-full flex flex-col '>
             
                 <p>{q.title}</p>

                 {isShowing &&  <p>{q.info}</p>} 
                 
               
            </div>
                )
            })}
            
        </div>

    </div>
  )
}
