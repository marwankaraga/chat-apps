
import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'
export default function Rightbar({user}) {
 

  
const HomeRightbar =() =>{
  return (
    <>
          <div className='birthdayContainer'>
            <img className='birthdayImg' src='assets/istockphoto-1128262881-170667a.jpg' alt='ss' />
            <span className='birthdayText'>
              <b>Firas</b> and <b> Khaled </b>adand <b> other friends</b> have a birthday today .
            </span>
          </div>
          <img className='rigthbarAd' src='assets/advertising-agency-e1586694068452.jpg' alt='ssd'></img>
          <h4 className='rightbarTitle'><b>Online Friends</b> </h4>
          <ul className='marwan'>
            {
              Users.map((u) => (
                <Online key={u.id} user={u} />
              ))
            }
          </ul>
  
    </>
  )
}

const ProfileRightbar =() =>{
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return(
    <>
   
    <div className='cont'>
    <h4 className='RightbarTitle'>User information</h4>
    <div className='rightbarInfo'>
      <div className='rightbarInfoItem'>
        <span className='rightbarInfokey'>City:</span>
        <span className='rightbarInfoValue'>{user.city}</span>
      </div>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfokey'>From:</span>
          <span className='rightbarInfoValue'>{user.from}</span>
        </div><div className='rightbarInfoItem'>
          <span className='rightbarInfokey'>Relationship:</span>
            <span className='rightbarInfoValue'>{user.relationship===1?
             "single " 
             :user.relationship===2 ?"married" : "-"}</span>
        </div>
        

      
    </div>
    <h4 className='rightbarTitle'>User Friends</h4>
    <div className='rightbarFollowings'>
      <div className='rightbarFollowing'>
            <img src={`${PF}like.png`} className='rightbarFollowingImg'>

        </img>
        <span className=''>Hohn carter</span>
      </div>
          <div className='rightbarFollowing'>
            <img src='/1.jpeg' className='rightbarFollowingImg'>

            </img>
            <span className=''>Hohn carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img src='/1.jpeg' className='rightbarFollowingImg'>

            </img>
            <span className=''>Hohn carter</span>
          </div>
    </div>
      </div>
    </>
  )
}

return (
  <div className='rightbar'>
    <div className='rightbarWrapper'>
      {user ? <ProfileRightbar/> : <HomeRightbar/>}
    </div>
  </div>
)


};




