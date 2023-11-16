
/*
const seconds = new Date().getTime()/1000;

setTimeout(() => {
    console.log(`Ran after ${new Date().getTime()/1000-seconds} seconds`);
    
},500);

while(true) {
    if(new Date().getTime()/1000 - seconds > 2)
    console.log('Looped for 2 seconds');
    break;
}*/

/*

const name = document.getElementById('name');
const clickbtn = document.getElementById('clickbtn');

console.log(name.value);

clickbtn.addEventListener('click',count);

/* typing charaters are updated only when counter reached 1 billion

function count() {
for(let i = 0;i<1e10;i++) {
    i++;
}
console.log("process done");

}
*/

// spliting the cpu hungry task with help of settimeout

let i = 0;
function count() {
    do {
        i++;
    }while(i % 1e6 !=0)

    if(i === 1e9) alert("Reached the value");
    else setTimeout(count);
}