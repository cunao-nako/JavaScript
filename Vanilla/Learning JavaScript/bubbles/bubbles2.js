let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54,
              48, 69, 34, 55, 51, 52, 44, 51, 69, 64,
              66, 55, 52, 61, 46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25, .33, .31,
             .25, .29, .27, .22, .31, .25, .25, .33,
             .21, .25, .25, .25, .28, .25, .24, .22,
             .20, .25, .30, .25, .24, .25, .25, .25,
             .27, .25, .26, .29];

function report(scores) {
    let maxScore = 0;
    for (let i=0; i<scores.length; i++) {
        if (maxScore < scores[i]) {
            maxScore = scores[i];
        }
    }
    return maxScore;
}

function getBestResult(scores, maxScore) {
    let bestResults = new Array(0);
    for (let i=0; i<scores.length; i++) {
        if (scores[i] == maxScore) {
            bestResults.push(i)
        }
    }
    return bestResults;
}

function getBestCost(costs, bestResults) {
    let minCost;
    let bestCost;
    let cost = 0;
    for (let i=0; i<costs.length; i++ ) {
        if (cost < costs[i]) {
            cost = costs[i];
        }
    }
    for (let i=0; i<bestResults.length; i++) {
        minCost = costs[bestResults[i]];
        if (minCost < cost) {
            cost = minCost;
            bestCost = bestResults[i];
        }
    }
    result = 'The cheapest solution is solution №' + bestCost + '. ' + 'It costs ' + cost;
    return result;
}

let maxScore = report(scores);
let bestResults = getBestResult(scores, maxScore);

document.write('<h2>Bubble tests: ', scores.length, '</h2>');
document.write('<h2>Highest Bubble score: ', maxScore, '</h2>');
document.write('<h2>Solutions with the highest score: ', bestResults, '</h2>');
document.write('<h2>', getBestCost(costs, bestResults), '</h2>');