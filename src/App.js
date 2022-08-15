import React, {useState} from 'react';
import InputSearch from './InputSearch';
import WebProfiles from './WebProfiles';

import users from './items.json';

function App() {

const [currentUserId, setCurrentUserId] = useState(1);
const [currentInput, setCurrentInput] = useState("");
const [suggestions, setSuggestions] = useState([]);

const filterSuggestions = (searchUpdate) => {
  setCurrentInput(searchUpdate);
  if (searchUpdate){
    setSuggestions(
      users.filter((user) => user.name.toLowerCase().includes(searchUpdate.toLowerCase()))
    );
  }else{
    setSuggestions([]);
  }
  
}

  return (
    <div>
      <InputSearch setCurrentUserId={setCurrentUserId } currentInput={currentInput} setCurrentInput={setCurrentInput} suggestions={suggestions} setSuggestions={setSuggestions} filterSuggestions={filterSuggestions} />
      <WebProfiles users={users} currentUserId={currentUserId} setCurrentUserId={setCurrentUserId}/>
    </div>
  )
}

export default App;
