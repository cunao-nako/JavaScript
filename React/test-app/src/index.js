import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const JSXH1 = <h1>Hello, World!</h1>;

let ordinaryH1 = document.createElement('h1');

console.log('ordinaryH1:');
console.dir(ordinaryH1);

console.log('JSXH1:',JSXH1);


ReactDOM.render(JSXH1, document.getElementById('root'));
