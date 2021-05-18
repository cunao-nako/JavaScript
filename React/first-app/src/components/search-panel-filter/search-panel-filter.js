import React, { Component } from 'react';
import { Button } from 'reactstrap';

class SearchPanelFilter extends Component {

  sendFilter = target => this.props.setFilter(target.textContent.toLowerCase());
  render() {
    return(
      <div className='btn-group'>
        <Button outline color="primary" type='button' onClick= {event => { this.sendFilter(event.target); } }>All</Button>
        <Button outline color="primary" type='button' onClick={event => { this.sendFilter(event.target); } }>Liked</Button>
      </div>
    );
  }
}

export default SearchPanelFilter;