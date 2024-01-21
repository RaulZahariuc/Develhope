function runCallbacks(callbacks) {
    callbacks.forEach(callback => callback());
}

function firstCallback() {
    console.log("First callback executed");
}

function secondCallback() {
    console.log("Second callback executed");
}

function thirdCallback() {
    console.log("Third callback executed");
}

const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);
