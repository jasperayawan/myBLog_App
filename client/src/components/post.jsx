import React from 'react'
import travel from '../assets/timetotravel.webp'
import profileUser from '../assets/jasper.jpg'
import {format} from 'date-fns'
import {Link} from 'react-router-dom';

const Post = ({_id,title,summary,cover,content,createdAt,author}) => {
  return (
    <div className='max-w-[1024px] mx-auto py-[1rem] px-4'>
        <div className='flex flex-col justify-center items-center gap-4'>
            <div className="post grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="image bg-slate-400 overflow-hidden w-full h-full rounded-sm relative">
                    <Link to={`/post/${_id}`}>
                        <img src={'http://localhost:4000/' + cover} alt="" className='rounded-md h-full w-full'/>
                    </Link>
                </div>
                <div className="description flex flex-col gap-4">
                    <Link to={`/post/${_id}`}>
                        <h2 className='font-bold'>{title}</h2>
                    </Link>
                    <div className="author-prof flex justify-start items-center gap-2">
                        <a href="author" className='flex justify-center items-center gap-2 text-slate-600 font-bold'>
                            <div className='overflow-hidden rounded-full h-[40px] width-[40px]'>
                                <img src={profileUser} alt="" className='w-full h-full object-cover'/>
                            </div>
                            {author.email}</a>
                        <time className='text-slate-500'>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
                    </div>
                    <p>{summary}</p>
                </div>
            </div>

        

            
            
        </div>
    </div>
  )
}

export default Post