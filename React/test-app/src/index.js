import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      currentName: '',
    }
  }

  onSubmit = input => {
    const newName = [...this.state.names, input.value];
    this.setState(({names: newName, currentName: newName[newName.length - 1]}));
    input.value = '';
  }

  onPrevName = () => {
    const { names, currentName } = this.state;

    let index = names.indexOf(currentName) - 1;

    if (index === -1) { index = names.length - 1; }

    this.setState({currentName: names[index]})
  }

  onNextName = () => {
    const { names, currentName } = this.state;

    let index = names.indexOf(currentName) + 1;

    if (index === names.length) { index = 0; }

    this.setState({currentName: names[index]})
  }

  onLastName = () => this.setState(state => ({currentName: state.names[state.names.length - 1]}));

  render() {
    const { currentName } = this.state;

    return (
      <>
        <h1>Hello, <span style={{"color": "lightgreen"}}>{currentName}</span></h1>
        <input
          type='text'
          placeholder='Enter your name:'
        />
        <button
          onClick={() => this.onSubmit(document.querySelector('input'))}
        >Submit</button><br></br><br></br>
        <button
          onClick={this.onPrevName}
        >Previous Name</button>
        <button
          onClick={this.onNextName}
        >Next Name</button><br></br>
        <button
          onClick={this.onLastName}
        >Last Name</button>
      </>
    );
  }
}





ReactDOM.render(<App/>, document.querySelector('#app'));

