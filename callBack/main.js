// function loadScript(path, callback) {


//     let script = document.createElement('script');
//     script.src = path;
//     script.onload = () => callback(script);
//     document.head.append(script);

// }

// loadScript('./my/test.js', script => alert(`Cool, the script ${script.src} is loaded `));


// function loadScript(path, callback) {
//     let script = document.createElement('script');
//     script.src = path;
//     script.onload = function () {
//         callback(`Cool, the script is loaded `);   // will get error bcz we are calling the callback as a function, 
//     };
//     document.head.append(script);
// }

// loadScript('./my/test.js', alert); // we are invoking & passing the result to callback instead of passing the function itself as a callback


// callback heal

// function loadScript(path, callback) {


//     let script = document.createElement('script');
//     script.src = path;

//     script.onload = () => callback(script);
//     document.head.append(script);
// }

// loadScript('./my/test.js', (script) => {
//     alert(`Script ${script.src} loaded, successfully`)

//     loadScript('./my/test1.js', (script) => {
//         alert(`Script ${script.src} loaded, successfully`)
//     });

// });


// to manage error

// callback(err) callback(null, err)

function loadScript(path, callback) {

    let script = document.createElement('script');
    script.src = path;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Error Occurred`))
    document.head.append(script);
}

// loadScript('./my/test.js', (error, script) => {
//     if (error) console.log(error);
//     else {

//         alert(`Script ${script.src} loaded, successfully`);

//         loadScript('./my/test1.js', (error, script) => {
//             if (error) console.log(error);
//             else {

//                 loadScript('./my/test2.js', (error, script) => {
//                     if (error) console.log(error);
//                     else console.log('Successfully Loaded');

//                 })
//             }


//         })
//     }
// });

loadScript('./my/test.js', step1);
function step1(error, script) {
    if (error) console.log('Error Occurred');
    else {
        alert(`Script ${script.src} loaded, successfully`);

        loadScript('./my/test1.js', step2);
    }

}

function step2(error, script) {
    if (error) console.log('Error Occurred');
    else {
        alert(`Script ${script.src} loaded, successfully`);

        loadScript('./my/test2.js', step3);
    }
}

function step3(error, script) {
    if (error) console.log('Error Occurred');
    else {
        alert(`Script ${script.src} loaded, successfully`);
    }
}