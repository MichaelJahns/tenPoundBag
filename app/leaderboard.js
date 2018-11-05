'use strict';

// pretend new data
var localStorageScores = [
  {name: 'Bird', score: 1},
  {name: 'Test', score: 9999},
];

// // remove item from local storage
// if (localStorage.getItem('scores') !== null){
//     localStorage.removeItem('scores');
// }

// stringify and put into local storage
localStorage.setItem('scores', JSON.stringify(localStorageScores));


function populateAndRenderLeaderBoard(){
  // static data
  var staticScores = [
    {name: 'Noah', score: 600},
    {name: 'Zahra', score: 488},
    {name: 'Tara', score: 366},
    {name: 'Sam', score: 255},
    {name: 'Bird', score: 722},
    {name: 'Michael J', score: 264},
    {name: 'Jake', score: 472},
    {name: 'Becca', score: 382},
    {name: 'Brent', score: 1234},
    {name: 'Jeff', score: 173},
    {name: 'Harris', score: 4356},
    {name: 'Fletcher', score: 224},
  ];

  // create new data structure with all score data
  var allScoresUnordered = [];

  // add static data to unordered array
  for (var i = 0; i < staticScores.length; i++){
    allScoresUnordered.push(staticScores[i]);
  }

  // add user score data to unordered array
  for (var i = 0; i < localStorageScores.length; i++){
    allScoresUnordered.push(localStorageScores[i]);
  }

  // sort the scores
  var scoresOrdered = [];

  while (allScoresUnordered.length > 0){
    // find the highest score
    var maxScore = 0;
    var maxIndex = 0;

    for (var i = 0; i < allScoresUnordered.length; i++){
      if (allScoresUnordered[i].score > maxScore){
        maxScore = allScoresUnordered[i].score;
        maxIndex = i;
      }
    }

    // add to ordered array
    scoresOrdered.push(allScoresUnordered[maxIndex]);

    // remove from unordered array
    allScoresUnordered.splice(maxIndex,1);

  }

  var tbodyEl = document.getElementsByTagName('tbody')[0];
  // render ordered table
  for (var i = 0 ; i < scoresOrdered.length; i++){
    // create row
    var trEl = document.createElement('tr');
    
    // create td for name
    var tdEl = document.createElement('td')
    tdEl.textContent = i + 1;
    trEl.appendChild(tdEl);
    
    // create td for name
    tdEl = document.createElement('td')
    tdEl.textContent = scoresOrdered[i].name;
    trEl.appendChild(tdEl);

    // create td for score
    tdEl = document.createElement('td')
    tdEl.textContent = scoresOrdered[i].score;
    trEl.appendChild(tdEl);
    tbodyEl.appendChild(trEl);
  }
}

// if we're on the leaderboard page
if (document.getElementById('leaderboard') !== null){
  populateAndRenderLeaderBoard();
}

// if we're on the main page
// add event listener to the submit score button
// on submit, add the score to local storage

