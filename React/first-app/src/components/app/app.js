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

let totalLikes = 0,
    activeButton;

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: 'Playing with React', important: false, liked: false, id: 1},
        {label: 'Have some fun with it ...', important: false, liked: false, id: 2},
        {label: '... Fucking JSX ...', important: false, liked: false, id: 3},
      ],
      likedPostsOnly: false,
      searching: false,
    };
  }

  deletePost = id => this.changindData(id, 'delete');

  clickLike = id => this.changindData(id, 'liked');

  clickImportant = id => this.changindData(id, 'important');

  searchingPosts = (text) => {
    if(text) { this.setState(({searching: text})); }
    else { this.setState(({searching: false})); }
  };

  showLikedPosts = event => {
    this.setState(state => ({ likedPostsOnly: !state.likedPostsOnly, }));
    this.changeActiveButton(event.target);
  }

  showAllPosts = event => {
    this.setState(() => ({
      likedPostsOnly: false,
      searching: false,
    }));
    this.changeActiveButton(event.target);
  }

  changeActiveButton = target => {
    if (activeButton === target) {
      activeButton.removeAttribute('style');
      activeButton = undefined;
      return false;
    }
    if (!activeButton) {
      activeButton = target;
      activeButton.style.backgroundColor = '#007bff';
      activeButton.style.color = 'white';
      return false;
    } 
    if (activeButton) {
      activeButton.removeAttribute('style');
      activeButton = target;
      activeButton.style.backgroundColor = '#007bff';
      activeButton.style.color = 'white';
      return false;
    }
  }

  likesCounter = (grade = true) => {
    if (grade) { totalLikes += 1; }
    else { totalLikes -=1; }
  } 

  addPost = (event, label) => {
    event.preventDefault();

    if (label) {
      let id,
          newData = this.state.data.slice();
      try {
        id = this.state.data[this.state.data.length - 1].id + 1;
      } catch(e) { id = 0;}

      newData.push({
        label,
        important: false,
        liked: false,
        id,
      });

      this.setState(() => ({ data: newData }));
      event.target.reset();
    }
  };

  changindData = (itemId, operation) => {

    let data = this.state.data,
        index = data.indexOf(data.find(item => item.id === itemId)),
        newData,
        {label, important, liked, id} = data[index];

    if (operation === 'delete') {
      if (data[index].liked) { this.likesCounter(false); }

      newData = [...data.slice(0, index), ...data.slice(index + 1)];

      return this.setState( () => ({ data: newData }));
    }

    if (operation === 'liked') {
      if (!liked) { this.likesCounter(); }
      else { if(totalLikes) { this.likesCounter(false); }}

      newData = [...data.slice(0, index), {label, important, liked: !liked, id}, ...data.slice(index + 1)];
    
      return this.setState(() => ({data: newData}));
    }

    if (operation === 'important') {
      newData = [...this.state.data.slice(0, index), {label, important: !important, liked, id}, ...data.slice(index + 1)];

      return this.setState(() => ({data: newData}));
    }
  };

  render() {
    return (

      <AppDiv>
        <Header totalPosts={this.state.data.length} totalLikes={totalLikes}/>
        <div className='search-panel d-flex'>
          <SearchPanel
            searchingPosts = { this.searchingPosts }
            clearInput = { this.state.searching ? this.state.searching : ''}
          />
          <SearchPanelFilter
            showLikedPosts={ this.showLikedPosts }
            showAllPosts= { this.showAllPosts }
          />
        </div>
        <PostList
          posts={this.state.data}
          clickTrach={ id => { this.deletePost(id); }}
          clickLike={ id => {this.clickLike(id); }}
          clickImportant={ id => {this.clickImportant(id); }}
          likedPostsOnly={this.state.likedPostsOnly}
          searching = { this.state.searching ? this.state.searching : false }
        />
        <PostAddItem addPost={ (event, label) => { this.addPost(event, label) }}/>
      </AppDiv>

    );
  };
}

export default App;