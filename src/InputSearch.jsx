import React from 'react';
import './InputSearch.css';

function InputSearch({setCurrentUserId, currentInput, setCurrentInput, suggestions, setSuggestions, filterSuggestions}) {
  return (
    <div className="search-box">
      <h1>WEBPROFILES</h1>
      <div className='input-search'>
          <input type="text" className="search" placeholder="Search Profile Name" value={currentInput} onChange={(event) => { filterSuggestions(event.target.value) }} />
          {/* <button>Search</button> */}

        <div className='suggestion-box'>
          {suggestions.map((user, id) => (
            <p key={id} className="suggestions" onClick={() => {setCurrentUserId(user.id)}}>{user.name}</p>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default InputSearch;