import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import axios from 'axios';
import React, { useContext, useRef, useState } from 'react'
import { Authcontext } from '../../context/AuthContext';
import './share.css'

export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user}=useContext(Authcontext);
  const desc=useRef();
  const [file,setFile]=useState(null)

  const submitHandler =async(e) =>{
    e.preventDefault();
    const newPost={
      userId:user._id,
      desc:desc.current.value
    };
    
    if(file){
      const data=new FormData();
      const filename=file.name;
      data.append("file",file);
      data.append("name",filename);
      newPost.img=filename;
      try{
        await axios.post("/upload",data);
        


      }catch(err){console.log(err)}

    }
    try{
      await  axios.post("/posts",newPost);
      window.location.reload()

    }catch(err){

    }
    
  }


    return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
            <img className='shareprofileImg' src={PF+user.profilePicture}></img>
          <input placeholder={"What 's in your mind  "+user.username+"?"}
            className='shareInput'
            ref={desc} />
        </div>
        <hr className='shareHr'></hr>
        
        <form className='shareBottom' on onSubmit={submitHandler}>
          <div className='shareOptions'>
          <label htmlFor='file' className='shareOption'>
            <PermMedia htmlColor='tomato' className='ShareIcon'></PermMedia>
            <span className='shareOptionText'>photo or video</span>
            <input type="file" style={{display :"none"}} accept='.png,.jpeg.,.jpg' id="file" onChange={(e) =>setFile(e.target.files[0])}></input>
          </label>
          <div className='shareOption'>
            <Label htmlColor='goldenrod' className='ShareIcon'></Label>
            <span className='shareOptionText'>Tag</span>
          </div>
          <div className='shareOption'>
            <Room htmlColor='green' className='ShareIcon'></Room>
            <span className='shareOptionText'>Location</span>
          </div>
          <div className='shareOption'>
            <EmojiEmotions htmlColor='tomato' className='ShareIcon'></EmojiEmotions>
            <span className='shareOptionText'>Feelings</span>
              <button className='shareButton'>Share</button>
          </div>
        </div>
       
      </form>
      </div>
    </div>
  )
}
