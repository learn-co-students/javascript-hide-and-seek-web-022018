function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('ul.ranked-list li')

  for (let x = 0; x < list.length; x++) {
    list[x].innerHTML = (parseInt(list[x].innerHTML)+n).toString()
  }
}

function deepestChild() {
  let grand = document.getElementById('grand-node')
  let child = grand.children[0]
  while (child) {
    grand = child
    child = grand.children[0]
  }
  return grand
}
