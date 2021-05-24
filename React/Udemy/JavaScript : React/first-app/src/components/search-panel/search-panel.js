import React, { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {

  render() {

    return(
      <input
        className='form-control search-input'
        type='text'
        placeholder='Search posts'
        onChange={ event => { this.props.searchingQuerry(event.target.value); }}
      />
    );
  }
}

export default SearchPanel;