import { Search,Person,Chat,Notifications } from '@mui/icons-material'
import React, { useContext } from 'react'
import "./topbar.css"
import { Authcontext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Topbar() {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useContext(Authcontext);


  return (
    

    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Marwan Karaga</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          
          <img src={user.profilePicture ?
             PF + user.profilePicture :
              PF + "download (1).jpg"} alt=""
               className="topbarImg" />
</Link>
      </div>
    </div>
  )
}
