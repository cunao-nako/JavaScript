import React from 'react';

import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import SearchPanelFilter from '../search-panel-filter/search-panel-filter';
import PostList from '../post-list/post-list';
import PostAddItem from '../post-add-item/post-add-item';

import './app.css';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <div className='search-panel d-flex'>
        <SearchPanel/>
        <SearchPanelFilter/>
      </div>
      <PostList/>
      <PostAddItem/>
    </div>
  );
    
};

export default App;