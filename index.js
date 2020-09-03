// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *    -counter1 is reaching outside the scope of the "function counter()"" to get the variable count
 *    -counter2 is reaching outside of the function "counter2()" scope to get the variable count
 * 2. Which of the two uses a closure? How can you tell?
 *    -the Counter2 is rteaching outside of the function to get the variable so it is not closure.
 *    -the Counter1 is reaching from one function inside another function to get that variable so it is closure.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *    -Counter2 is best for when you want to save the the variables and refrence it somewhere else.
 *    -Counter1 is best for when you want to keep track of the variable in the background and do not need to show to a user
 *        -want to keep track of things under hood
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. 
This should be a whole number between 0 and 2. */

function inning(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//console.log(inning(3));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) 
and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inningRanScore, numsInnings) {
  let scoreAway = 0;
  let scoreHome = 0;
  for (let i = 0; i < numsInnings; i++) {
    scoreAway += inningRanScore(3);
    scoreHome += inningRanScore(3);
  }

  const games = {
    Away: scoreAway,
    Home: scoreHome,
  };

  return games;
}
// console.log(finalScore(inning, 9));
// console.log(finalScore(inning, 9));
// console.log(finalScore(inning, 9));
// console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each point in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

//write a getInningScore Function

function getInningScore(inningRanScore) {
  let home = 0;
  let away = 0;
  return {
    home: (home += inningRanScore(3)),
    away: (away += inningRanScore(3)),
  };
}
// console.log(getInningScore(inning));

function scoreboard(getInningScore, inning, numInnings) {
  let currentScore = [];
  //getting all the scores for all the innings
  for (let i = 1; i < numInnings + 1; i++) {
    currentScore.push(getInningScore(inning));
  }
  // console.log(currentScore);
  let homeScore = 0;
  let awayScore = 0;
  for (let i = 0; i < numInnings; i++) {
    homeScore = homeScore + currentScore[i].home;
    awayScore = awayScore + currentScore[i].away;
    console.log(
      `${i + 1}st inning Home Team = ${currentScore[i].home} and Away Team = ${
        currentScore[i].away
      }`
    );
  }
  console.log(`This is the final score for Home's score ${homeScore}`);
  console.log(`This is the final score for Away's score ${awayScore}`);
}

console.log(scoreboard(getInningScore, inning, 9));
