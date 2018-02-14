

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let rankLists = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankLists.length; i++) {
    let holder = rankLists[i].children;
    for (let j = 0; j < holder.length; j++){       
      let newHolder = holder[j];
      newHolder = parseInt(newHolder.innerHTML);
      holder[j].innerHTML = newHolder + n;
    }
  }
}



function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}