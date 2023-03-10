// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// We will take two arrays with both team names which will contain the scores of both teams 
// we will iterate through the array and add all the values and divide it with 3
// we will store the result in a variable called average score 
// we will compare the average score of both the teams
// we will check for the condition if the score is above 100 for both the teams
// we will again check if one team scores higher than the other and will check if scores are same or not 


let checkWinner=(dolphinsScore,koalasScore)=>{
let dolphinsAverageScore=0,koalasAverageScore=0;

dolphinsScore.forEach(scores => dolphinsAverageScore+=scores);
koalasScore.forEach(scores => koalasAverageScore+=scores);

// console.log(dolphinsAverageScore,koalasAverageScore);

(dolphinsAverageScore/3);
(koalasAverageScore/3);

if((dolphinsAverageScore>=100) && (koalasAverageScore>=100))
{
    if(dolphinsAverageScore ===koalasAverageScore)
    {
        return `Match Draw`;
    }
    else    if(dolphinsAverageScore>koalasAverageScore){
        return `Dolphins are the Winners`;
    }
    else{
        return `Koalas are the Winners`;
    }
}
return `No team wins the Trophy`;
}

const dolphins=[97,112,101];
const koalas=[109,95,106];

const result=checkWinner(dolphins,koalas);
console.log(result);

// 97, 112 and 101. Koalas score 109, 95 and 106