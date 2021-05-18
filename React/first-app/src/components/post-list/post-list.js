import React, { Component } from 'react';

import { ListGroup } from 'reactstrap';

import PostListItem from '../post-list-item/post-list-item';

import './post-list.css';

class PostList extends Component {

  element = item => {
    return(
      <li className='list-group-item' key={item.id}>
        <PostListItem
          label={item.label}
          important={item.important}
          liked={item.liked}
          clickTrash={() => this.props.clickTrach(item.id)}
          clickLike={() => this.props.clickLike(item.id)}
          clickImportant={() => this.props.clickImportant(item.id)}
        />
      </li>
    );
  }

  render() {
    const elements = this.props.posts.map(item => {
      if ( this.props.searching && !this.props.likedPostsOnly ) {
        if (item.label.toLowerCase().includes(this.props.searching.toLowerCase())) { return this.element(item); }
        else { return false; }
      }
      if( this.props.likedPostsOnly ) {
        if ( this.props.searching ) {
          if (item.label.toLowerCase().includes(this.props.searching.toLowerCase()) && item.liked) { return this.element(item); }
          else { return false; }
        }
        if (item.liked) { return this.element(item); }
        else { return false; }
      }
      else { return this.element(item); }
    });
    
    return(
      <ListGroup className="app-list list-group">
        {elements}
      </ListGroup>
    );
  }
}

export default PostList;