import React, { useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
import Editor from '../editor';


const EditPost = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [summary, setsummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:4000/post/'+id)
        .then(res => {
            res.json().then(postInfo => {
                setTitle(postInfo.title);
                setContent(postInfo.content);
                setsummary(postInfo.summary);
            })
        })
    },[])
   
    const updatePost = async (e) => {
        const data = new FormData();
        e.preventDefault();

        data.set('title', title);
        data.set('summary', summary);
        data.set('content',content);
        data.set('id', id); 
        if(files?.[0]){
            data.set('file', files?.[0]);
        }

        const res = await fetch('http://localhost:4000/post',{
            method: 'PUT',
            body: data,
            credentials:'include',
        });
       
        if(res.ok){
            // navigate('/'+id)
        }
        
    }

  return (
    <div className='max-w-[1024px] mx-auto py-[10rem] px-4'>
        <form onSubmit={updatePost}>
            <div className='flex flex-col gap-2 mb-2'>
                <input 
                    type='title' 
                    name='title'
                    placeholder={'Title'} 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}/>
                <input 
                    type='summary' 
                    name='summary'
                    placeholder={'Summary'} 
                    value={summary}
                    onChange={(e) => setsummary(e.target.value)}/>
                <input 
                    type='file' 
                    name='file'
                   
                    onChange={(e) => setFiles(e.target.files)}/>
            </div>
                <Editor onChange={setContent} value={content}/>
            <div className='mt-2'>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-slate-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                Update post
              </button>
            </div>
        </form>
    </div>
  )
}

export default EditPost