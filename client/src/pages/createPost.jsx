import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold','italic','underline','strike','blockquote'],
        ['link','image'],
        ['clean']
    ]
};

const formats = [
    'header',
    'bold','italic','underline','strike','blockquote',
    'list','bullet','indent',
    'link','image'
];

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [summary, setsummary] = useState('');
    const [content, setContent] = useState('');
   

  return (
    <div className='max-w-[1024px] mx-auto py-[10rem] px-4'>
        <form>
            <div className='flex flex-col gap-2 mb-2'>
                <input 
                    type='title' 
                    placeholder={'Title'} 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}/>
                <input 
                    type="summary" 
                    placeholder={'Summary'} 
                    value={summary}
                    onChange={(e) => setsummary(e.target.value)}/>
                <input type="file" />
            </div>
                <ReactQuill 
                    value={content} 
                    modules={modules} 
                    formats={formats}
                    onChange={(newValue) => setContent(newValue)}/>
            <div className='mt-2'>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-slate-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                Create post
              </button>
            </div>
        </form>
    </div>
  )
}

export default CreatePost