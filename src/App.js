import React, {useState} from 'react';
import './App.css';
import Webprofile from './Components/Webprofile';

import SearchBox from './Components/SearchBox';
import users from './Components/items.json';
import ComponentTwo from './Components/ComponentTwo';



function App() {
  const [currentUserId, setCurrentUserId] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const filterSuggestions = (searchUpdate) => {
    setSearchInput(searchUpdate);
    if(searchUpdate)
      setSearchSuggestions(users.filter((user) => user.name.toLowerCase().includes(searchUpdate.toLowerCase())));
    else setSearchSuggestions([]);
  }
  return (
    <div className="App">
      <SearchBox searchInput={searchInput} searchSuggestions={searchSuggestions} filterSuggestions={filterSuggestions} setCurrentUserId={setCurrentUserId} setSearchSuggestions={setSearchSuggestions} />
      <Webprofile users={users} currentUserId={currentUserId} setCurrentUserId={setCurrentUserId} />
    <ComponentTwo users={users} currentUserId={currentUserId} />

    </div>
  );
}

export default App;
// Harrison visited :)