function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let deepest = document.querySelector('#grand-node');
  while(deepest.firstElementChild!==null) {
<<<<<<< HEAD
    deepest = deepest.firstElementChild;
  }
  return deepest;
=======
    //if(deepest.firstElementChild!==null) {
      deepest = deepest.firstElementChild;
    //} else {
    }
      return deepest;
    //}
  }
  //console.log(deepest);
//  return deepest[deepest.length-1];

//  return targetNodes[targetNodes.length-1];
>>>>>>> 5476dbadfa361adb4ce5a44cc111bbdb447d2d13
}

function increaseRankBy(n) {
  let targetNodes = document.querySelectorAll('.ranked-list li');
  for(let i=0; i<targetNodes.length; i++) {
    targetNodes[i].innerHTML = parseInt(targetNodes[i].innerHTML)+n;
  }
}
