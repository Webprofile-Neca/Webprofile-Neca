import React from 'react'
import './Google.css';
import icon from './icon.png'
import mic from './mic.png'
import search from './search.png'
import leave from './leave.png'
import googlee from './googlee.png'
function Google() {
  return (
 <div className='main'>
      <div className='body'>
          <div className='navbar'> 
              <div className='nav1'>
                 <ul>
                     <li>Gmail</li>
                     <li>Images</li>
                 </ul>
              </div>
              <div className='nav2'><img src={icon} alt='icon'/> </div>
              <div className='nav3'>S</div>
          </div>
        


          <div className='content'> 
        
             <div className='contenta'>
                    <div className='inside'>
                        <div className='i1'><img className='i1-img' src={googlee} alt='googlee'/></div>
                        <div className='i2'><div className='i2a'><img src={search} alt='search'/></div><input/><div className='i2b'><img src={mic} alt='mic'/></div></div>
                        <div className='i3'><button>Google Search</button> <button>I'm feeling lucky</button></div>
                        <div className='i4'>Google offered in:<span><li>Hausa</li><li>Igbo</li><li>Ede Yoruba</li><li>Nigerian pidgin</li></span></div>
                    </div>
 
             </div>
        
         </div>
     </div>



      <div className='footer'>
           <div className='foot1'><li>Nigeria</li></div>
           <hr></hr>
           <div className='foot2'><div><li>About</li><li>Advertising</li><li>Business</li><li>How Search works</li></div><div className='fta'><img className='fta-img' src={leave} alt='leave'/> Carbon Nuetral since 2007</div><div className='ftb'><li>Privacy</li><li>Terms</li><li>Settings</li></div></div>
      </div>
  </div>
  )
}

export default Google;