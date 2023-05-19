import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {formatISO9075} from 'date-fns'
import { UserContext } from '../userContext';

const PostPage = () => {
    const [postInfo, setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext);
    const {id} = useParams();

    useEffect(() => {     
        fetch(`http://localhost:4000/post/${id}`)
            .then(res => {
                res.json().then(postInfo => {
                    setPostInfo(postInfo);
                })
            })
    },[])

    if(!postInfo) return '';
  return (
    <div>
        <div className='image max-h-[400px] overflow-hidden flex'>
            <img src={`http://localhost:4000/${postInfo.cover}`} alt='' className='object-cover object-center'/>
        </div>
        <h1 className='font-bold py-3'>{postInfo.title}</h1>
        <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
        <div className='author font-bold text-slate-600'>by @{postInfo.author.username}</div>
        {userInfo.id === postInfo.author._id && (
            <div>
                <Link to={`/edit/${postInfo._id}`} className='edit underline font-bold text-slate-800 flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                    Edit this post</Link>
            </div>
        )}
        <div dangerouslySetInnerHTML={{__html:postInfo.content}}/>
    </div>
  )
}

export default PostPage