import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'



export default function Home() {
  return (
    <>
      <Topbar/>
      <div className='homeContainer'>
        <Sidebar />
      <Feed/>
      <Rightbar/>
      
      </div>

    </>
   


  )
}
