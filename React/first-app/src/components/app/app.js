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

let activeButton;

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      likedPostsOnly: false,
      filter: '',
      searchingQuerry: '',
    };
  }

  searchingQuerry = text => this.setState({searchingQuerry: text});

  returnFindedPosts = text => {
    if (text) {
      return this.state.data.filter( post => post.label.toLowerCase().includes(text.toLowerCase()) ); 
    } else { return this.state.data; }
  }

  setFilter = filter => this.setState({filter});

  filterPosts = (items, filter) => {
    if (filter === 'liked') {
      return items.filter(post => post.liked);
    } else { return items; }
  }

  addPost = label => {
    let data = this.state.data,
        newData = data.slice(),
        id = data.length ? data[data.length - 1].id + 1 : 0;

    newData.push({ label, important: false, liked: false, id });

    this.setState(() => ({ data: newData }));
  }

  changindData = (itemId, operation) => {
    const data = this.state.data,
        index = data.indexOf(data.find(item => item.id === itemId)),
        {label, important, liked, id} = data[index];

    let newData;

    if (operation === 'delete') {
      newData = [...data.slice(0, index), ...data.slice(index + 1)];

      return this.setState( () => ({ data: newData }));
    }

    if (operation === 'like' || operation === 'important') {
      let changedItem;
      
      if (operation === 'like') {
        changedItem = {label, important, liked: !liked, id};
      } else {
        changedItem = {label, important: !important, liked, id};
      }

      newData = [...data.slice(0, index), changedItem, ...data.slice(index + 1)];
    
      return this.setState(() => ({data: newData}));
    }
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

  render() {
    const {data, searchingQuerry, filter} = this.state,
          totalLikes = data.filter(item => item.liked).length,
          totalPosts = data.length,
          visiblePosts = this.filterPosts(this.returnFindedPosts(searchingQuerry), filter);
    
    return (

      <AppDiv>
        <Header
          totalPosts={ totalPosts }
          totalLikes={ totalLikes }
        />
        <div className='search-panel d-flex'>
          <SearchPanel
            searchingQuerry = { this.searchingQuerry }
          />
          <SearchPanelFilter
            setFilter={ this.setFilter }
          />
        </div>
        <PostList
          posts={visiblePosts}
          changindData={ (id, operation) => { this.changindData(id, operation); }}
        />
        <PostAddItem addPost={ (event, label) => { this.addPost(event, label) }}/>
      </AppDiv>

    );
  };
}

export default App;