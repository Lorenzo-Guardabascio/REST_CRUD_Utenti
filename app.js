// Costante con l'URL dell'API
const url = 'https://663a66f61ae792804bef3adb.mockapi.io/utenti/User/';

// Funzione chiamata all'avvio della pagina per recuperare e mostrare gli utenti
// Questa funzione viene chiamata all'avvio della pagina e mostra tutti gli utenti presenti nell'API
window.onload = async () => {
    // Chiama la funzione showUsers per mostrare tutti gli utenti
    // L'uso di await è necessario per attendere che la funzione showUsers venga completata
    // prima di eseguire il successivo passo
    await showUsers(); // Mostra gli utenti
    // Chiama la funzione getValueForm per recuperare i dati dell'utente da modificare
    // L'uso di await è necessario per attendere che la funzione getValueForm venga completata
    // prima di eseguire il successivo passo
    getValueForm(); // Recupera i dati dell'utente da modificare
}

// Funzione per creare un nuovo utente
// Questa funzione viene chiamata quando si vuole creare un nuovo utente
const createUser = async () => {
    // Recupera i valori inseriti dall'utente nel form
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const age = document.getElementById('age').value;
    // Crea un nuovo oggetto utente
    const newUser = { name :name,
                        role: role,
                        age:age };

    // Invia una richiesta POST all'API con il nuovo utente
    // L'uso di await è necessario per attendere che la richiesta venga completata
    const res = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newUser),
    });

    // Se la richiesta ha avuto successo
    if (res.ok) {
        // Mostra un messaggio di conferma
        alert('Utente creato con successo!');
        // Chiama la funzione showUsers per mostrare tutti gli utenti
        // L'uso di await è necessario per attendere che la funzione showUsers venga completata
        // prima di eseguire il successivo passo
        await showUsers(); // Aggiorna la lista degli utenti
    }
}

// Funzione per recuperare i dati di un utente da modificare
// Questa funzione viene chiamata quando si vuole modificare un utente esistente
const getValueForm = async (idInInput) => {
    // Se viene passato un id all'interno della funzione
    const id = idInInput || paramId;
    if (id) {
        // Invia una richiesta GET all'API per recuperare i dati dell'utente richiesto
        // L'uso di await è necessario per attendere che la richiesta venga completata
        const res = await fetch(url + id);
        // Converte la risposta in un oggetto JSON
        const user = await res.json();
        // Aggiorna i valori inseriti nel form con i dati dell'utente
        document.getElementById('name').value = user.name;
        document.getElementById('role').value = user.role;
        document.getElementById('age').value = user.age;
        document.getElementById('id').value = user.id;
    }
}

// Funzione per aggiornare un utente
// Questa funzione viene chiamata quando si vuole modificare un utente esistente
const updateUser = async () => {
    // Recupera i valori inseriti dall'utente nel form
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const age = document.getElementById('age').value;
    // Crea un nuovo oggetto utente con i nuovi dati
    const updatedUser = { name :name,
                        role: role,
                        age:age };

    // Invia una richiesta PUT all'API per aggiornare l'utente richiesto
    // L'uso di await è necessario per attendere che la richiesta venga completata
    const res = await fetch(url + id, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updatedUser),
    });

    // Se la richiesta ha avuto successo
    if (res.ok) {
        // Mostra un messaggio di conferma
        alert('Utente aggiornato con successo!');
        // Chiama la funzione showUsers per mostrare tutti gli utenti
        // L'uso di await è necessario per attendere che la funzione showUsers venga completata
        // prima di eseguire il successivo passo
        await showUsers(); // Aggiorna la lista degli utenti
    }
}

// Funzione per eliminare un utente
// Questa funzione viene chiamata quando si vuole eliminare un utente esistente
const deleteUser = async () => {
    // Recupera l'id dell'utente da eliminare
    const id = document.getElementById('id').value;
    // Invia una richiesta DELETE all'API per eliminare l'utente richiesto
    // L'uso di await è necessario per attendere che la richiesta venga completata
    const res = await fetch(url + id, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
    });

    // Se la richiesta ha avuto successo
    if (res.ok) {
        // Mostra un messaggio di conferma
        alert('Utente eliminato con successo!');
        // Chiama la funzione showUsers per mostrare tutti gli utenti
        // L'uso di await è necessario per attendere che la funzione showUsers venga completata
        // prima di eseguire il successivo passo
        await showUsers(); // Aggiorna la lista degli utenti
    }
}

// Funzione per mostrare la lista degli utenti
// Questa funzione viene chiamata quando si vuole visualizzare la lista degli utenti presenti nell'API
const showUsers = async () => {
    // Invia una richiesta GET all'API per recuperare tutti gli utenti
    // L'uso di await è necessario per attendere che la richiesta venga completata
    const res = await fetch(url);
    // Converte la risposta in un oggetto JSON
    const users = await res.json();
    // Recupera l'elemento HTML in cui mostrare gli utenti
    const usersContainer = document.getElementById('users-list');

    // Se l'elemento esiste
    if (usersContainer) {
        // Mostra gli utenti nel contenitore HTML
        usersContainer.innerHTML = users.map((user) => `
            <div class='col-12'>
                <span>${user.name}</span> / 
                <span>${user.role}</span> / 
                <span>${user.age}</span> / 
                <a class="btn btn-primary" onclick="getValueForm(${user.id})">Modifica</a>
            </div>
        `).join('');
    }
}


