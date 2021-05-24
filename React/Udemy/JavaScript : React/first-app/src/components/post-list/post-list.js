import React, { Component } from 'react';

import { ListGroup } from 'reactstrap';

import PostListItem from '../post-list-item/post-list-item';

import './post-list.css';

class PostList extends Component {

  element = item => {
    let {changindData} = this.props;

    return(

      <li className='list-group-item' key={item.id}>
        <PostListItem
          label={item.label}
          important={item.important}
          liked={item.liked}
          changindData={operation => changindData(item.id, operation)}
        />
      </li>

    );
  }

  render() {
    const elements = this.props.posts.map(item => this.element(item));
    
    return(
      <ListGroup className="app-list list-group">
        {elements}
      </ListGroup>
    );
  }
}

export default PostList;