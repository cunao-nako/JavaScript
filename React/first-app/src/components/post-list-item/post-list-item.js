import React, {Component} from 'react';

import './post-list-item.css';

class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false,
    };
    this.clickImportant = this.clickImportant.bind(this);
  }

  clickImportant = () => this.setState( state => ({ important: !state.important, }) );
  clickTrash = () => console.log('trash');
  clickLike = () => this.setState( state => ({ like: !state.like }) );

  render() {
    let {label} = this.props,
        classNames = 'app-list-item d-flex justify-content-between';

    if (this.state.important) { classNames += ' important'}
    if (this.state.like) { classNames += ' like'}

    return(

      <div className={classNames}>
        <span className="app-list-item-label" onClick={this.clickLike}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-star btn-sm" onClick={this.clickImportant}>
              <i className="fa fa-star"></i>
          </button>
          <button className="btn-trash btn-sm" onClick={this.clickTrash}>
              <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>

    );
  }
}

export default PostListItem;