import React from 'react';
import { Button } from 'reactstrap';

import './post-status-filter.css';

const SearchPanelFilter = () => {
  return(
    <div className='btn-group'>
      <Button outline color="primary" type='button'>All</Button>
      <Button outline color="primary" type='button'>Liked</Button>
    </div>
  );
}

export default SearchPanelFilter;