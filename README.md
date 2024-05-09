# Progetto: Gestione utenti

Questo progetto è un'applicazione web che permette di gestire gli utenti

## Funzionalità implementate

- Creazione di nuovi utenti
- Modifica dei dati degli utenti esistenti
- Eliminazione di utenti
- Visualizzazione della lista degli utenti

## Tecnologie utilizzate

- HTML, CSS e JavaScript per la struttura e il funzionamento dell'applicazione
- Bootstrap per lo stile e le funzionalità interattive
- API REST per la gestione degli utenti

## Installazione e utilizzo

1. Clona il repository sul tuo computer
2. Apri il file `index.html` nel tuo browser

## API REST

L'applicazione utilizza un'API REST per la gestione degli utenti. 

### Endpoint GET /users

Restituisce la lista di tutti gli utenti.

### Endpoint GET /users/:id

Restituisce i dettagli di un utente specifico.

### Endpoint POST /users

Crea un nuovo utente. Richiede un corpo della richiesta JSON con i seguenti campi:

- `name`: stringa che rappresenta il nome dell'utente
- `role`: stringa che rappresenta il ruolo dell'utente
- `age`: numero intero che rappresenta l'età dell'utente

### Endpoint PUT /users/:id

Aggiorna i dati di un utente specifico. Richiede un corpo della richiesta JSON con i seguenti campi:

- `name`: stringa che rappresenta il nome dell'utente
- `role`: stringa che rappresenta il ruolo dell'utente
- `age`: numero intero che rappresenta l'età dell'utente

### Endpoint DELETE /users/:id

Elimina un utente specifico.

