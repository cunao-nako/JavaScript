import React from 'react';
import { Button } from 'reactstrap';

const SearchPanelFilter = ({showLikedPosts, showAllPosts}) => {
  return(
    <div className='btn-group'>
      <Button outline color="primary" type='button' onClick= {event => { showAllPosts(event); } }>All</Button>
      <Button outline color="primary" type='button' onClick={event => { showLikedPosts(event); } }>Liked</Button>
    </div>
  );
}

export default SearchPanelFilter;