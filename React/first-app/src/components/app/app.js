import React, {Component} from 'react';

import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import SearchPanelFilter from '../search-panel-filter/search-panel-filter';
import PostList from '../post-list/post-list';
import PostAddItem from '../post-add-item/post-add-item';

import styled from 'styled-components';

const AppDiv = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: 'Playing with React', id: 1},
        {label: 'Have some fun with it ...', id: 2},
        {label: '... Fucking JSX ...', id: 3},
      ]
    };
  }

  deletePost = id => {
    let index = this.state.data.indexOf(this.state.data.find(item => item.id === id)),
        newData = [...this.state.data.slice(0, index), ...this.state.data.slice(index + 1)];

    this.setState( state => ({ data: newData }));
  }

  addPost = (event, label) => {
    event.preventDefault();
    if (label) {
      let id,
          newData = this.state.data.slice();
      try {
        id = this.state.data[this.state.data.length - 1].id + 1;
      } catch(e) { id = 0;}

      newData.push({label, id});
      this.setState(state => ({ data: newData }));
      event.target.reset();
    }
  }

  render() {
    return (
      <AppDiv>
        <Header totalPosts={this.state.data.length}/>
        <div className='search-panel d-flex'>
          <SearchPanel/>
          <SearchPanelFilter/>
        </div>
        <PostList posts={this.state.data} clickTrach={ id => { this.deletePost(id); }}/>
        <PostAddItem addPost={ (event, label) => { this.addPost(event, label) }}/>
      </AppDiv>
    );
  };
}

export default App;