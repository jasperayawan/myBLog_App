import React, { useEffect, useState } from 'react'
import Post from './post'

const PostContent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post').then(res => {
      res.json().then(posts => {
        setPosts(posts);
      });
    });
  },[])
  return (
    <div>
        {posts.length > 0 && posts.map(post => (
          <Post {...post}/>
        ))}
    </div>
  )
}

export default PostContent