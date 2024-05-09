// Costanti e variabili globali
const API_URL = 'https://663a66f61ae792804bef3adb.mockapi.io/utenti/User/';
const USERS_CONTAINER_ID = 'users-list';

/**
 * Funzione chiamata all'avvio della pagina per mostrare gli utenti
 * 
 * Chiama la funzione "showUsers" ogni volta che si carica la pagina.
 */
window.onload = async () => {
    // Chiama la funzione "showUsers" per mostrare gli utenti
    await showUsers();
}

/**
 * Funzione per ottenere gli utenti dall'API e mostrarli nella pagina.
 * 
 * La funzione inizia richiedendo gli utenti dall'API utilizzando la funzione fetch.
 * Successivamente, la risposta viene convertita in JSON utilizzando la funzione response.json().
 * Infine, la funzione mostra gli utenti nel contenitore HTML con l'ID "users-list" utilizzando la funzione map.
 * La funzione map crea un elemento HTML per ogni utente e lo restituisce come stringa.
 * La funzione join unisce tutte le stringhe in una sola stringa.
 * La stringa viene infine assegnata all'elemento HTML con l'ID "users-list".
 */
async function showUsers() {
    // Richiedi gli utenti dall'API
    const response = await fetch(API_URL);
    // Converte la risposta in JSON
    const users = await response.json();

    // Ottieni l'elemento HTML in cui mostrare gli utenti
    const usersContainer = document.getElementById(USERS_CONTAINER_ID);

    // Se l'elemento esiste...
    if (usersContainer) {
        // ...mostra gli utenti
        usersContainer.innerHTML = users.map(user => {
            // Crea un elemento HTML per l'utente
            return `
                <div class='col-12'>
                    <span>${user.name}</span> / 
                    <span>${user.role}</span> / 
                    <span>${user.age}</span> / 
                    <a class="btn btn-primary" href="./gestione.html?id=${user.id}">Modifica</a>
                </div>
            `;
        }).join('');
    }
}

