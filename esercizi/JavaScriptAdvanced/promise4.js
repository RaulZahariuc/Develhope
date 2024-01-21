function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {

        const success = Math.random() < 0.5;

        setTimeout(() => {
            if (success) {
                resolve("Data retrieved successfully");
            } else {
                reject(new Error("Error: Failed to fetch data"));
            }
        }, 1000);
    });
}

fetchDataFromAPI()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error.message);
    });
