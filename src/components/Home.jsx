import React from 'react'
import MarvelLogo from '../../src/assets/Marvel.png'
import DcLogo from '../../src/assets/DC.png'

export const Home = () => {
  return (
    <div className='text-center'>
   
    <h1 className=' text-5xl mt-12'>SUPER HEROES DE DC Y MARVEL</h1>
    <div className='grid-cols-2 inline-grid text-center gap-6 align-middle mt-9'>
     <a href="/marvel"><img src={MarvelLogo} className="h-44 hover:h-60" alt="" /></a>
     <a href="/dc"><img src={DcLogo} className="h-44 hover:h-60 hover:translate-x-5" alt="" /></a>
    </div>
    </div>
    
  )
}
