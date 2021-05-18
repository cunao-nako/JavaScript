import React from 'react';

import './search-panel.css';

const SearchPanel = ({searchingPosts, clearInput}) => {
  return(
    <input
      className='form-control search-input'
      type='text'
      placeholder='Search posts'
      onChange={() => searchingPosts(document.querySelector('input').value)}
      value={clearInput}
    />
  );
}

export default SearchPanel;