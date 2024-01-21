function delayPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("La promise è stata risolta dopo 2 secondi");
        }, 2000);
    });
}

delayPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("Errore:", error);
    });
