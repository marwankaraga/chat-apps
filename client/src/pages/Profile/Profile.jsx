import './profile.css'
import React, { useContext, useEffect, useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/Rightbar'
import axios from 'axios'
import { useParams } from 'react-router'
import { Authcontext } from '../../context/AuthContext'

export default function Profile() {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER ; 
  const {user}= useContext(Authcontext);
  const username=useParams().username;

  useEffect(()=>{
    const fetchUSer=async ()=>{
      const res = await axios.get(`/users?username=${username}`);
      
    }
    fetchUSer();
  },[username])

  return (
    <>
      <Topbar />
      <div className='profile'>
      <Sidebar/>
      <div className='profileRight'>
        <div className='profileRightTop'>
            <div className='profileCover'>
              <img className='profileCoverImg' src={PF+user.profilePicture}  alt='sas'/>
                          <img className='profileUserImg' src={`${PF}/received_1401511129863910.jpeg`} alt='' />
            </div>
            <div className='profileInfo'> 
            <h4 className='profileInfoName'>{user.username}</h4>
            <span className='profileInfoDesc'>{user.desc}</span>
            </div>
        </div>
        <div className='profileRightBottom'>
            <Feed username={username}/>
            <Rightbar user={user}/>
        </div>
      </div>
          </div>

   

      </>



  )
}

