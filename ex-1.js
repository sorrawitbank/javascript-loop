// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];
let newScores =[] ;
// Start coding here
for (let i = 0; i < scores.length; i++) {
    let fixscores = scores[i]-10
    newScores.push(fixscores) 
}

console.log(newScores);
