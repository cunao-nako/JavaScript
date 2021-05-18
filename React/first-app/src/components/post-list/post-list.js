import React, { Component } from 'react';

import { ListGroup } from 'reactstrap';

import PostListItem from '../post-list-item/post-list-item';

import './post-list.css';

class PostList extends Component {

  searchingPosts = (item, text, inLiked = false) => {
    if (!inLiked) {
      if (item.label.toLowerCase().includes(text.toLowerCase())) {
        return this.element(item);
      } else {  return false; }
    } else {
      if (item.label.toLowerCase().includes(text.toLowerCase()) && item.liked) {
        return this.element(item);
      } else { return false; }
    }
  }

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
      let { searching, likedPostsOnly } = this.props;

      if ( searching && !likedPostsOnly ) {
        return this.searchingPosts(item, searching);
      }
      if ( likedPostsOnly ) {
        if ( searching ) {
          return this.searchingPosts(item, searching, true);
        }
        if ( item.liked ) {
          return this.element(item);
        }
        return false;
      }
      return this.element(item);
    });
    
    return(
      <ListGroup className="app-list list-group">
        {elements}
      </ListGroup>
    );
  }
}

export default PostList;