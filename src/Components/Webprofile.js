import React from 'react'
import'./Webprofile.css'
import arrowicon from './arrowicon.png'
import nextt from './nextt.png'
import previous11 from './previous11.png'
import userImage from './desktop-image-hero-1.jpg';
import usp from './Pictures/5.jpg';
function Webprofile({currentUserId, setCurrentUserId, currentUser, setCurrentUser}) {

  return (
    <div className='main'>
      <div className='firstdiv'>
          <div className='updiv'>
             <div className='title'>Webprofile</div>
             <nav><li>Home</li><li>Mission</li><li>About</li><li>Contact</li></nav>
         
         </div>
         <img src={usp} alt="profile-picture" className="profile-picture"  />
     
             
     </div>
            <div className='seconddiv'>

                <div className='up1'>
                     <div className='a'><h1>Discover Innovative ways to decorate</h1></div>
                     <div className='b'><p>We provide jveufhufhr hjibrufrfr hjbyurffuihr ibygfyf byufef byuefge byuigeuf
                         iuhifre iuhufhf yu8huihfuf u8huhuehf og5ijgi 9uhvrh u9h8yvr8 uhuhgrg
                        </p></div>
                     <div className='c'>Click here for more<img className='more' src={arrowicon} alt='arrowicon'/></div>
                </div>


                <div className='down2'><button><img className='arrow' src={previous11} alt='previous11'/></button><button><img className='arrow' src={nextt} alt='nextt'/></button></div>
       
           </div>

    </div>
  )
}

export default Webprofile