import React from 'react'
import travel from '../assets/timetotravel.webp'

const Entries = () => {
  return (
    <div className='max-w-[1024px] mx-auto py-[8rem] px-4'>
        <div className='flex flex-col justify-center items-center gap-4'>
            <div className="post grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="image">
                    <img src={travel} alt="" className='rounded-md'/>
                </div>
                <div className="description flex flex-col gap-4">
                    <h2 className='font-bold'>Time to travel</h2>
                    <div className="author-prof flex gap-2">
                        <a href="author" className='text-slate-600 font-bold'>Jasper Ayawan</a>
                        <time className='text-slate-500'>May 18 2023</time>
                    </div>
                    <p>"Embark on an extraordinary adventure, where vibrant cultures and
                         breathtaking landscapes collide. Explore ancient ruins steeped in
                          history, witness awe-inspiring natural wonders, and indulge in 
                          mouthwatering cuisine that tantalizes your senses. From sun-kissed
                           beaches to majestic mountains, let the allure of discovery guide you
                            on an unforgettable journey of a lifetime."</p>
                </div>
            </div>

            <div className="post grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="image">
                    <img src={travel} alt="" className='rounded-md'/>
                </div>
                <div className="description flex flex-col gap-4">
                    <h2 className='font-bold'>Time to travel</h2>
                    <div className="author-prof  flex gap-2">
                        <a href="author" className='text-slate-600 font-bold'>Jasper Ayawan</a>
                        <time className='text-slate-500'>May 18 2023</time>
                    </div>
                    <p>"Embark on an extraordinary adventure, where vibrant cultures and
                         breathtaking landscapes collide. Explore ancient ruins steeped in
                          history, witness awe-inspiring natural wonders, and indulge in 
                          mouthwatering cuisine that tantalizes your senses. From sun-kissed
                           beaches to majestic mountains, let the allure of discovery guide you
                            on an unforgettable journey of a lifetime."</p>
                </div>
            </div>

            <div className="post grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="image">
                    <img src={travel} alt="" className='rounded-md'/>
                </div>
                <div className="description flex flex-col gap-4">
                    <h2 className='font-bold'>Time to travel</h2>
                    <div className="author-prof flex gap-2">
                        <a href="author" className='text-slate-600 font-bold'>Jasper Ayawan</a>
                        <time className='text-slate-500'>May 18 2023</time>
                    </div>
                    <p>"Embark on an extraordinary adventure, where vibrant cultures and
                         breathtaking landscapes collide. Explore ancient ruins steeped in
                          history, witness awe-inspiring natural wonders, and indulge in 
                          mouthwatering cuisine that tantalizes your senses. From sun-kissed
                           beaches to majestic mountains, let the allure of discovery guide you
                            on an unforgettable journey of a lifetime."</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Entries