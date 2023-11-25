function fetchDataFromAPI(callback) {
    setTimeout(() => {
        const dataFromAPI = { name: "John", age: 30 };
        callback(dataFromAPI);
    }, 2000); 
}

function handleData(data) {
    console.log("Dati recuperati:", data);
}

fetchDataFromAPI(handleData);
