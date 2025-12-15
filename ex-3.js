// Exercise #3: Find a Minimum Score
let studentScores = [100, 20, 3, 1000];
let minScore = studentScores[0];
console.log(minScore);


// Start coding here
for (let i = 0; i < studentScores.length; i++) {
    console.log(studentScores[i]);
    if (studentScores[i] < minScore){
        minScore = studentScores[i]
    } 
}
console.log(minScore);
