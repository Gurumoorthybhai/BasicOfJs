document is the topnouch object of the DOM structure
It includes entire DOM
write below cmd in browser console

document
<!DOCTYPE html>
<html>
<head>
</head>
<body>
</body>
</html>

document.documentElement
<html>
<head>
</head>
<body>
</body>
</html>

document.head
<head>
</head>


document.body
<body>
</body>

DOM Collection

childNodes inclused Text properties also
document.body.childNodes, childNodes are array like iteratable object, but those are not accessible by array methods like filter, find.

1. We can use for..of

for(let node of document.body.childNodes) {
    console.log(node);
}

2. No array methods

document.body.childNodes.filter instead Array.from(document.body.childNodes).filter

DOM collections are live & read-only.

For DOM collection iteration, use for..of instead for..in bcz it return all properties of the node, Nodes includes all nodes such as text, comment etc.,

document.body.parentNode
document.body.childNodes
document.body.previousSibling
document.body.nextSibling
document.body.firstChild
document.body.lastChild

parent node of BODY is HTML
console.log( document.body.parentNode === docucument.documentElement) ==> true

next sibling of head is body
console.log( document.head.nextSibling) HTMLBodyElement

Element-only Navigation

document.body.Children

firstElementChild
lastElementChild
previousElementChild
nextElementChild
parentElement

document.documentElement.parentNode // returns document
document.documentElement.parentElement // null 

because document is a node & not an element

closest - ancestor, elements parent, parents parent

document.getElementByTagName - returns a single element

's' on Elements
document.getElementsByTagName - returns collections of element


does not work
so, let ele = document.getElementsByTagName('p').value = 10

we should iterate to specific element & with index

let ele = document.getElementsByTagName('p')[0].value = 10

Diff b/w getElementBy vs querySelector

getElementBy* returns a live update

while querySelector returns a static result
