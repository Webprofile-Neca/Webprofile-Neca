import React from 'react'
import'./Webprofile.css'
import arrowicon from './arrowicon.png'
import nextt from './nextt.png'
import previous11 from './previous11.png'

function Webprofile({users, currentUserId, setCurrentUserId}) {
  let currentUser = users.find((user) => user.id === currentUserId);
  const next = () => {
    setCurrentUserId((currentUserId) => {
      if (currentUserId === users.length) return 1;
      return currentUserId + 1;
    });
  }
  const prev = () => {
    setCurrentUserId((currentUserId) => {
      if (currentUserId === 1) return users.length;
      return currentUserId - 1;
    });
  }
  // document.addEventListener('keypress', (event) => {
  //   alert("rvsd");
  //   if (event.keyCode === 37) return prev();
  //   if (event.keyCode === 39) return next();
  // });
  return (
    <div className='main'>
      <div className='firstdiv'>
          <div className='updiv'>
             <div className='title'>Webprofile</div>
             <nav><li>Home</li><li>Mission</li><li>About</li><li>Contact</li></nav>
         
         </div>
         <img src={require(`./Pictures/${currentUser.img}`)} alt="profile" className="profile-picture"  />
     
             
     </div>
            <div className='seconddiv'>

                <div className='up1'>
                     <div className='a'><h1>{currentUser.name}</h1></div>
                     <div className='b'><p>{currentUser.about}</p></div>
                     <div className='c'>Click here for more<img className='more' src={arrowicon} alt='arrowicon'/></div>
                </div>


                <div className='down2'><button onClick={() => {prev()}}><img className='arrow' src={previous11} alt='previous11'/></button><button onClick={() => {next()}}><img className='arrow' src={nextt} alt='nextt'/></button></div>
       
           </div>

    </div>
  )
}

export default Webprofile