function delay(callback, delayTime) {
    setTimeout(callback, delayTime);
}

function sayHi() {
    console.log("Hi, there!");
}

delay(sayHi, 2000); 
