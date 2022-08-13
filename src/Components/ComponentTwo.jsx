import React from 'react';
import './ComponentTwo.css';
import dark from './dark.jpg';
import light from './light.jpg';

function ComponentTwo({users, currentUserId}) {
  let currentUser = users.find((user) => user.id === currentUserId);
  return (
    <div className='flex-row'>
        <div className='dark'>
            <img src = {dark} alt = 'dark'></img>
        </div>
        <div className='about'>
            <div className='about-me'>
               <h2>About Me</h2>
                <p>Name: {currentUser.name}</p>
                {/* <p>I.D No: ITF/NECA/No-5</p> */}
                <p>Skills: {currentUser.skills}</p>
                <p>Connect with me: <a className="github-link" href={currentUser.github_link}>{currentUser.github_link}</a></p> 
            </div>    
        </div>
        <div className='light'>
        <img src = {light} alt = 'light'></img>
        </div>
    </div>
  )
}

export default ComponentTwo;