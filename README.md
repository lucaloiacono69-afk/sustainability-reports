# Come Testare la Pagina Web
Per testare la pagina web su un PC in locale occorre eseguire i seguenti passaggi:
# . Prerequisiti
Assicurarsi di avere installati sul PC le seguenti applicazioni:
•	Node.js e npm (o pnpm):Sono necessari per eseguire l'applicazione React. Si possono scaricare dal sito ufficiale di Node.js (https://nodejs.org/) e npm (Node Package Manager) viene installato automaticamente con Node.js. Se si preferisce pnpm (che è più veloce), si può installarlo con ”npm install -g pnpm” dopo aver installato Node.js.
•	Git: Per scaricare il codice da GitHub. Si può scaricarlo da https://git-scm.com/.
•	Un editor di testo: Come Visual Studio Code (https://code.visualstudio.com/), che è raccomandato per lo sviluppo web.
# . Scaricare il Codice dal Repository GitHub
1.	Aprire il terminale o il prompt dei comandi sul PC. (Su Windows, "cmd" o "PowerShell"; su macOS/Linux, cercando "Terminale").
2.	Navigare nella directory dove salvare il progetto (es. una cartella ”Progetti”). 

cd C:\Progetti
Oppure su macOS/Linux
cd ~/Progetti

3.	Clonare il repository GitHub. Questo scaricherà tutti i file del progetto sul PC:

git clone https://github.com/lucaloiacono69-afk/sustainability-reports
Questo creerà una nuova cartella chiamata “sustainability-reports” contenente il progetto.
E’ consigliato utilizzare una directory vicina alla radice del disco per non avere l’errore “File too long” 
# . Installare le Dipendenze
1.	Navigare nella cartella del progetto che si è appena clonato:

cd sustainability-reports/sustainability-reports
2.	Installare le dipendenze. Il progetto utilizza pnpm come package manager, che è più efficiente. Se non si ha pnpm, si può installarlo prima con npm install -g pnpm.

pnpm install
Se non vuoi installare pnpm, puoi provare con npm:
npm install
Questo comando scaricherà tutte le librerie e i pacchetti necessari (come React, Tailwind CSS, ecc.) e li salverà nella cartella node_modules.
Per non avere l’errore: “Impossibile caricare il file C:\ ….L'esecuzione di script è disabilitata nel sistema” occorre modificare la policy di esecuzione di PowerShell. 
Pertanto eseguendo come amministratore PowerShell e poi eseguendo il comando “Set-ExecutionPolicy RemoteSigned” e confermando con S (per Si) la policy consente l'esecuzione di script locali.

# . Avviare l'Applicazione
1.	Una volta installate le dipendenze, si può avviare il server di sviluppo. Questo comando avvierà l'applicazione e la renderà accessibile tramite il browser web:

pnpm dev
Se hai usato npm:
npm run dev
2.	Dopo aver eseguito il comando, il terminale mostrerà un messaggio simile a questo:
Plain Text
VITE vX.Y.Z ready in Zms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
3.	Apri il browser web (Chrome, Firefox, Edge, Safari ) e vai all'indirizzo http://localhost:5173/ (o l'indirizzo locale che ti viene mostrato nel terminale ).
