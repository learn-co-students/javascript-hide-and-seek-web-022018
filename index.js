function getFirstSelector(selector){
	return document.querySelector(selector)
}

function nestedTarget(){
	return document.querySelector('#nested .target')
}

function deepestChild(){
	let element = document.getElementById('grand-node')

	while (element.children[0] != undefined){
		element = element.children[0]
	}
	return element
}

function increaseRankBy(n){
	let elements = document.querySelectorAll('.ranked-list')
	for (let i = 0; i < elements.length; i++){
		let children = elements[i].children

		for(let j = 0; j < children.length; j++){
			// console.log('child', children[j].innerHTML)
			let old = parseInt(children[j].innerHTML)
			children[j].innerHTML = (old + n).toString()
		}
	}
}