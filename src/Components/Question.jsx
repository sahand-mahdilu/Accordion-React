import React, { useState } from 'react'
import { Datas } from '../Datas.js/Datas'

export default function Question() {

    
    const [Question,setQusetion]=useState(Datas)

    console.log(Question);//array


  return (

    
    <div className='mt-36 bg-white p-4'>
        <h1>Qusetions and Answers About programming</h1>

        <div>
            <div className='flex flex-col'>
                <p></p>
            </div>
        </div>

    </div>
  )
}
