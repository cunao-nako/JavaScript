import React, {Component} from 'react';

import './post-list-item.css';

class PostListItem extends Component {

  render() {

    let {label, important, liked} = this.props,
        {clickLike, clickImportant, clickTrash} = this.props,
        classNames = 'app-list-item d-flex justify-content-between';

    if (important) { classNames += ' important'; }
    if (liked) { classNames += ' like'; }
  
    return(

      <div className={classNames}>
        <span className="app-list-item-label" onClick={clickLike}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-star btn-sm" onClick={clickImportant}>
              <i className="fa fa-star"></i>
          </button>
          <button className="btn-trash btn-sm" onClick={clickTrash}>
              <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>

    );
  }
}

export default PostListItem;