import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Element extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 26,
    };
    this.plusScore = this.plusScore.bind(this);
  }

  plusScore() { this.setState(state => ({ score: state.score += 1 })); }

  render() {
    let {name, surname} = this.props,
        {score} = this.state;
    return(
      <>
        <h3>Name: {name}, Surname: {surname}, Score: {score}</h3>
        <button onClick={this.plusScore}>+</button>
      </>
    );
  }
}

const All = () => {
  return(
    <>
      <Element name='John' surname='Smith'/>
      <Element name='Alex' surname='Miller'/>
      <Element name='Sarah' surname='Fisher'/>
    </>
  );
}

ReactDOM.render(<All />, document.getElementById('root'));
