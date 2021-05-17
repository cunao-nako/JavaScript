import React from 'react';

import './post-add-item.css';

const PostAddItem = () => {
  return(
    <form className="bottom-panel d-flex">
      <input
        type='text'
        placeholder='What are you thinking about?'
        className='form-control new-post-label'
      />
      <button type="submit" className="btn-outline-secondary btn">Add post</button>
    </form>
  );
}

export default PostAddItem;