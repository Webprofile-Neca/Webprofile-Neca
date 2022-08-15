import React from 'react';
import './WebProfiles.css';

function Webprofiles({users, currentUserId, setCurrentUserId}) {

let currentUser = users.find((user) => user.id === currentUserId)

const next = () => {
    setCurrentUserId((currentUserId) => 
    
    {
        if(currentUserId === users.length) return 1
    
       return currentUserId + 1
    
    }

    ) 
}


const prev = () => {
    setCurrentUserId((currentUserId) => 
    
    {
        if(currentUserId === 1) return users.length
    
       return currentUserId - 1
    
    }

    ) 
}





  return (
    <div className='main'> 
        <button  onClick={() => {prev()}} className='left-angle'>{'<'}</button>
        <div className='container'>
        <div className='about'>
            <div className='about-me'>
            <h1>Hi! My Name is <span>{currentUser.name}</span>.</h1>
            <p>I'm a <span>Software developer</span>. {currentUser.about}</p>
            <p>Skills: <span>{currentUser.skills}</span> </p>
            <p>Connect with me: <span><a href={currentUser.github_link} target="blank">{currentUser.github_link}</a></span></p>
            </div>  
        </div>
        <div className='image'>
        <img src = {require(`./Pictures/${currentUser.img}`)} alt = 'profile'></img>
        </div>
    </div>
    <button onClick={() => {next()}} className='right-angle'>{'>'}</button>
    </div>
    
  )
}

export default Webprofiles;