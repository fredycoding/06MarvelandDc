import React from 'react'
import MarvelLogo from '../../src/assets/Marvel.png'
import DcLogo from '../../src/assets/DC.png'
import 'animate.css'

export const Home = () => {
  return (
    <div className='text-center'>
   
    <h1 className=' text-5xl mt-12 animate__animated animate__lightSpeedInRight'>SUPER HEROES DE MARVEL Y DC</h1>
    <div className='grid-cols-2 inline-grid text-center gap-6 align-middle mt-20'>
     <a href="/marvel"><img src={MarvelLogo} className="h-44 bg-blue-500 rounded-md animate__animated animate__infinite animate__heartBeat animate__slow" alt="" /></a>
     <a href="/dc"><img src={DcLogo} className="h-44 bg-blue-500  rounded-md animate__animated animate__infinite animate__heartBeat animate__slow" alt="" /></a>
    </div>
    </div>
    
  )
}
