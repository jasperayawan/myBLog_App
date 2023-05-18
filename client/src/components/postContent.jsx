import React from 'react'
import Post from './post'

const PostContent = () => {
  return (
    <div>
        <div className='mt-[8rem]'>
            <Post/>
        </div>
        <Post/>
        <div className='mb-[8rem]'>
            <Post/>
        </div>
    </div>
  )
}

export default PostContent