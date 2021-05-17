import React from 'react';

import './post-add-item.css';

const PostAddItem = ({addPost}) => {
  return(
    <form className="bottom-panel d-flex" onSubmit={event => { addPost(event, document.querySelector('[data-input]').value); }}>
      <input data-input type='text' placeholder='What are you thinking about?' className='form-control new-post-label'/>
      <button type="submit" className="btn-outline-secondary btn">Add post</button>
    </form>
  );
}

export default PostAddItem;