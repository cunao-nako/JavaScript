import React, { Component } from 'react';

import './post-add-item.css';

class PostAddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  newPostsText = event => this.setState({ text: event.target.value, });

  submitPost = event => {
    event.preventDefault();
    if (this.state.text) { this.props.addPost(this.state.text); }
    this.setState({text: ''});
  }

  render() {
    return(
      <form className="bottom-panel d-flex" onSubmit={event => { this.submitPost(event); }}>
        <input
          type='text'
          placeholder='What are you thinking about?'
          className='form-control new-post-label'
          onChange={event => { this.newPostsText(event); }}
          value={this.state.text}
        />
        <button type="submit" className="btn-outline-secondary btn">Add post</button>
      </form>
    );
  }
}

export default PostAddItem;