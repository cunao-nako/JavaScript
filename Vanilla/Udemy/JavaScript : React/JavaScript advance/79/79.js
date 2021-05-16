// function* generator() {
//   yield 'S';
//   yield 'c';
//   yield 'r';
//   yield 'p';
//   yield 't';
// }

// console.log(generator().next());

function* count(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

for (let i of count(7)) {
  console.log(i);
}