

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  
  let newRank = [];
  let finalRank = [];
  let holder;
  let rankLists = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < rankLists.length; i++) {
    newRank.push(rankLists[i].children);
    for (let j = 0; j < rankLists[i]; j++) {
      finalRank.push(newRank[j]);
    }
    
  }
  return finalRank;
}
increaseRankBy(2);


function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}