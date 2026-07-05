import React from 'react'
import HeroImage from '../assets/hero_img.jpg'

const Hero = () => {
  return (
    <div className='w-9/12 mx-auto bg-mauve-100 my-15 rounded-lg p-20'>
<div className='flex justify-between'>
          <div>
            <h1 className='text-5xl font-bold pt-20'>Books to freshen up <br/> your bookself</h1>
            <button className='bg-green-500 text-white px-8 py-3 rounded-sm my-8'>View The List</button>
        </div>
        <div>
            <img src= {HeroImage} alt="" />
        </div>
</div>
    </div>
  )
}

export default Hero