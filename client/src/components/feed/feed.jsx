import  Share from '../share/share.jsx';
import React, { useContext, useEffect, useState } from 'react';
import './feed.css';
import axios from "axios";
import Post from '../posts/post.jsx';
import { Authcontext } from '../../context/AuthContext.js';


export default function Feed({username}) {
  const [posts,setPosts]=useState([]);
  const {user}=useContext(Authcontext)

  useEffect(() =>{
    const fetchPosts=async () =>{
      const res = username
      ? await axios.get("/posts/profile/"+username)
        : await axios.get("/posts/timeline/"+user._id);

      setPosts(res.data)
    };
    fetchPosts();
  },[username ,user._id])
  return (
    <div className='feed'> 
      <div className='feedWrapper'>
        <Share/>
        {
          posts.map((p) => (
            <Post post={p} key={p.id} />
          ))
          }
        
     </div>
    </div>
  )
}
