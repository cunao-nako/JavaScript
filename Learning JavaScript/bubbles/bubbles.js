var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54,
              48, 69, 34, 55, 51, 52, 44, 51, 69, 64,
              66, 55, 52, 61, 46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];
var maxScore = 0;
var bestResults = new Array(0);

for (let i=0; i<scores.length; i++) {
    console.log('Buble solution #' + (i + 1) + ' ' + 'score: ' + scores[i]);
    if (maxScore < scores[i]) {
        maxScore = scores[i];
    }
}

for (let i=0; i<scores.length; i++) {
    if (maxScore == scores[i]) {
        bestResults.push(i);
    }
}

console.log('Bubble tests: ', scores.length);
console.log('Highest Bubble score: ', maxScore);
console.log('Solutions with the highest score: ', bestResults);