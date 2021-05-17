import React from 'react';

import { ListGroup } from 'reactstrap';

import PostListItem from '../post-list-item/post-list-item';

import './post-list.css';

const PostList = ({posts, clickTrach}) => {
  
  const elements = posts.map(item => {
    return(
      <li className='list-group-item' key={item.id}>
        <PostListItem label={item.label} important={item.important} clickTrash={() => clickTrach(item.id)}/>
      </li>
    );
  });
  
  return(
    <ListGroup className="app-list list-group">
      {elements}
    </ListGroup>
  );
}

export default PostList;