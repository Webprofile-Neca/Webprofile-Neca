import React from 'react';
import './InputSearch.css';

function InputSearch({setCurrentUserId, currentInput, setCurrentInput, suggestions, setSuggestions, filterSuggestions}) {
  return (
    <div className='input-search'>
        <h1>WEBPROFILES</h1>
        <input type="text" className='input' placeholder='Search Profile Name' value={currentInput} onChange={(event) => { filterSuggestions(event.target.value) }} />
        <button>Search</button>
        <div className='suggestions'>
           {suggestions.map((user) => (
            <p onClick={() => {setCurrentUserId(user.id)}}>{user.name}</p>
           ))}
        </div>
    </div>
  )
}

export default InputSearch;