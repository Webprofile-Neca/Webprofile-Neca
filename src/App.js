import React, {useState} from 'react';
import './App.css';
import Webprofile from './Components/Webprofile';

import users from './Components/items.json';
import ComponentTwo from './Components/ComponentTwo';



function App() {
  const [currentUserId, setCurrentUserId] = useState(1);
  const [currentUser, setCurrentUser] = useState(users[0]);
  return (
    <div className="App">
      <Webprofile users={users} currentUserId={currentUserId} setCurrentUserId={setCurrentUserId} currentUser={currentUser} setCurrentUser={setCurrentUser} />
    <Webprofile/>
    <ComponentTwo/>

    </div>
  );
}

export default App;
// Harrison visited :)