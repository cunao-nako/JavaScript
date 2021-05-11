// const app = 'spotify';

// (function(){
//   console.log('hi');
//   let app = 'VS Code';
//   console.log(app);
// }());

// console.log(app);

const something = (function(){
  const privat = 'something privat';

  return { surprize: privat }
}());

console.log(something.surprize);

