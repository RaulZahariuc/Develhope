function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                const dataFromAPI = { name: "John", age: 30 };
                resolve(dataFromAPI);
            } else {
                reject("Errore nel recupero dei dati dall'API");
            }
        }, 2000); 
    });
}

fetchDataFromAPI()
    .then(data => {
        console.log("Dati recuperati:", data);
    })
    .catch(error => {
        console.error("Errore:", error);
    });
