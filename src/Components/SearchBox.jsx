import React from 'react';
import './SearchBox.css';

function SearchBox({searchInput, searchSuggestions, filterSuggestions, setCurrentUserId, setSearchSuggestions}) {
  const chooseSuggestion = (id) => {
    setCurrentUserId(id);
    setSearchSuggestions([]);
  }
  return (
    <div className="search-box">
      <input type="text" className="search" value={searchInput} onChange={(event) => {filterSuggestions(event.target.value)}} />
      <div className="suggestion-box">
      {/* {searchInput} */}
        {
          searchSuggestions.map((suggestion, id) => (
            <p key={id} className="suggestions" onClick={() => {chooseSuggestion(suggestion.id)}}>{suggestion.name}</p>
          ))
        }
      </div>
    </div>
  )
}

export default SearchBox;