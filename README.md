Sustainability Reports

Applicazione React per la visualizzazione di report di sostenibilità.

🚀 Come Testare la Pagina Web in Locale
📋 Prerequisiti

Assicurati di avere installato sul tuo PC le seguenti applicazioni:

Node.js
 (include npm automaticamente)

Alternativa consigliata: pnpm, installabile con:

npm install -g pnpm


Git
 – per scaricare il codice dal repository

Visual Studio Code
 o un altro editor di testo

📂 Scaricare il Codice dal Repository GitHub

Apri il terminale (su Windows: cmd o PowerShell; su macOS/Linux: "Terminale") e naviga nella cartella dove vuoi salvare il progetto, ad esempio:

cd C:\Progetti


Oppure su macOS/Linux:

cd ~/Progetti


Clona il repository:

git clone https://github.com/lucaloiacono69-afk/sustainability-reports


Questo comando creerà la cartella sustainability-reports contenente il progetto.
💡 Consiglio: Usa una cartella vicina alla radice del disco per evitare l’errore "File too long".

📦 Installare le Dipendenze

Naviga nella cartella del progetto:

cd sustainability-reports/sustainability-reports


Installa le dipendenze con pnpm (consigliato):

pnpm install


Oppure, se preferisci usare npm:

npm install


⚠️ Possibile errore su Windows:
"Impossibile caricare il file C:\ …. L'esecuzione di script è disabilitata nel sistema".

Per risolvere:

Apri PowerShell come amministratore

Esegui il comando:

Set-ExecutionPolicy RemoteSigned


Conferma con S (Sì)

▶️ Avviare l'Applicazione

Avvia il server di sviluppo:

pnpm dev


Oppure, se usi npm:

npm run dev


Se tutto va a buon fine, vedrai un messaggio simile:

VITE vX.Y.Z ready in Zms
➜ Local:   http://localhost:5173/
➜ Network: use --host to expose
➜ press h to show help


Ora puoi aprire il browser (Chrome, Firefox, Edge, Safari) e visitare:
👉 http://localhost:5173/
