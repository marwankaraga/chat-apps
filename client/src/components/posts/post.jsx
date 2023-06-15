import React, { useContext } from 'react'
import '../posts/post.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Authcontext } from '../../context/AuthContext'




export default function Post({post}) {
  const{user:currentUSer}=useContext(Authcontext);
  
 const [like,setLike]=useState(post.likes.length);
  const [islike, setIsLike] = useState(false);
  const [user, setUser] = useState({})

  const likeHandler =() =>{
    try{
      axios.put("/posts/"+post._id+"/like",{userId:currentUSer._id})
    }
    catch(err){
    }
    setLike(islike ? like-1 :like+1)
    setIsLike(!islike)
  }
  const PF = process.env.REACT_APP_PUBLIC_FOLDER ;
  useEffect(() => {    
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      
      setUser(res.data);
    };
    fetchUser();
},[post.userId])

  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postLeft'>
                  
            <Link to={`/profile/${user.username}`}>

            <img src={PF+user.profilePicture } className='postProfileImg' alt="hi"/>
            </Link>
           
              <span className='postUsername'>{user.username}</span>
            <span className='postDate'>{post.date}</span>
            
                </div>
                <div className='postRight'></div>
            </div>
            <div className='postCenter'>
              <span className='postText'>{post.desc}</span>
          <img src={PF+post.img} className='postImg' alt='ss'></img>
            </div>
        <div cl assName='postBottom'>
          <div className='postBottomLeft'>
            <img src={`${PF}heart.png`} className='likeIcon' onClick={likeHandler} alt='dasd'></img>
            <img src={`${PF}like.png`} className='likeIcon' onClick={likeHandler} alt='dsaddas'></img>
            <span className='postLikeCounter'>{like}</span>
           
            
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'></span></div>
        </div>
        </div>
    </div>
  )
}
