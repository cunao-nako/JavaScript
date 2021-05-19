import React, { Component } from 'react';
import { Button } from 'reactstrap';

import './post-status-filter.css';

class SearchPanelFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      {name: 'all', label: 'All Posts'},
      {name: 'liked', label: 'Liked Posts'},
    ];   

  }

  render() {
    const buttons = this.buttons.map( ({name, label}) => {
      const {filter, setFilter} = this.props,
            active = name === filter ? 'active' : '';

      return (

        <Button
          outline
          color="primary"
          className={active}
          type='button'
          key={name}
          name={name}
          onClick= {() => setFilter(name) }
        >{label}</Button>

      );
    });
    return(
      <div className='btn-group'>
        {buttons}
      </div>
    );
  }
}

export default SearchPanelFilter;