import React from 'react';

import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import SearchPanelFilter from '../search-panel-filter/search-panel-filter';
import PostList from '../post-list/post-list';
import PostAddItem from '../post-add-item/post-add-item';

import styled from 'styled-components';

const AppDiv = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const App = () => {

  let data = [
    {label: 'Playing with React', id: 1},
    {label: 'Have some fun with it ...', id: 2},
    {label: '... Fucking JSX ...', id: 3},
  ]

  return (
    <AppDiv>
      <Header/>
      <div className='search-panel d-flex'>
        <SearchPanel/>
        <SearchPanelFilter/>
      </div>
      <PostList posts={data}/>
      <PostAddItem/>
    </AppDiv>
  );
    
};

export default App;