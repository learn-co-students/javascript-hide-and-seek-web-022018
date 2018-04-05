function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName("target")[0]
}

function deepestChild() {
  let parent = document.getElementById('grand-node')
  let child =  parent.childNodes[1]
  console.log(child)
  while (child) {
    parent = child
    child = parent.childNodes[1]
  }
  return parent
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < list.length; i++) {
    //console.log((parseInt(list[i].innerHTML)+5).toString())
    list[i].innerHTML = (parseInt(list[i].innerHTML)+n).toString()
  }
}

// console.log(getFirstSelector("span"))
// console.log(nestedTarget())
// console.log(deepestChild())
//increaseRankBy(3)
