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