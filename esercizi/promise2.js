function fetchUserData() {
    return new Promise((resolve) => {
        // Simulazione di un'operazione asincrona con setTimeout
        setTimeout(() => {
            const userData = { id: 1, name: 'John' };
            // Risolvere la prima Promise con i dati dell'utente
            resolve(userData);
        }, 1000); // Simula un ritardo di 1000 millisecondi (1 secondo)
    });
}

function fetchUserPosts(userId, userName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const userPosts = ['Post 1', 'Post 2', 'Post 3'];

            resolve(userPosts);
        }, 1000); 
    });
}


fetchUserData()
    .then(userData => {
        console.log("Nome dell'utente:", userData.name);
        return fetchUserPosts(userData.id, userData.name);
    })
    .then(userPosts => {
        console.log("Titoli dei post dell'utente:", userPosts);
    })
    .catch(error => {
        console.error("Errore:", error);
    });
