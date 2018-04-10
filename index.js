function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
return document.querySelector('#nested')
}

function deepestChild(){
  var child = document.querySelector('#grand-node')
    while (child.querySelector('div')){
      var child = child.querySelector('div')
    }
  return child

}

function increaseRankBy(n){
var list = document.querySelectorAll('ul.ranked-list li')
  for (const element in list){
    list[element].innerHTML = parseInt(list[element].innerHTML) + n

  }
}
