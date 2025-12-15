// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];

// Start coding here
for (const [index, score] of scores.entries()) {
  scores[index] = score - 10;
}

console.log(scores);
