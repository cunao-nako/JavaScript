import React from 'react';

import './post-list-item.css';

function PostListItem(props) {

    let {label, important, liked, changindData} = props,
        classNames = 'app-list-item d-flex justify-content-between';

    if (important) { classNames += ' important'; }
    if (liked) { classNames += ' like'; }
  
    return(
      <div className={classNames}>
        <span className="app-list-item-label" onClick={() => changindData('like')}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-star btn-sm" onClick={() => changindData('important')}>
              <i className="fa fa-star"></i>
          </button>
          <button className="btn-trash btn-sm" onClick={() => changindData('delete')}>
              <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
}

export default PostListItem;