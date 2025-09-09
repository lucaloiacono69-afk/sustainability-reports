# 🌱 Sustainability Reports

[![React](https://img.shields.io/badge/React-18.0.0-61dafb?logo=react)](https://react.dev/)  
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff?logo=vite)](https://vitejs.dev/)  
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Applicazione **React + Vite** per la visualizzazione di report di sostenibilità.  

---

## 🚀 Come Testare la Pagina Web in Locale

### 📋 Prerequisiti
Assicurati di avere installato sul tuo PC le seguenti applicazioni:

- **[Node.js](https://nodejs.org/)** (include **npm** automaticamente)  
  - Alternativa consigliata: **pnpm**, installabile con:  
    ```bash
    npm install -g pnpm
    ```
- **[Git](https://git-scm.com/)** – per scaricare il codice dal repository  
- **[Visual Studio Code](https://code.visualstudio.com/)** o un altro editor di testo  

---

### 📂 Scaricare il Codice dal Repository GitHub
Apri il terminale (su Windows: `cmd` o **PowerShell**; su macOS/Linux: **Terminale**) e naviga nella cartella dove vuoi salvare il progetto:

```bash
# Su Windows
cd C:\Progetti

# Su macOS/Linux
cd ~/Progetti
```

Clona il repository:
```bash
git clone https://github.com/lucaloiacono69-afk/sustainability-reports
```

👉 Questo comando creerà la cartella `sustainability-reports` contenente il progetto.  
💡 **Consiglio**: usa una cartella vicina alla radice del disco per evitare l’errore *"File too long"*.  

---

### 📦 Installare le Dipendenze
Naviga nella cartella del progetto:
```bash
cd sustainability-reports/sustainability-reports
```

Installa le dipendenze con **pnpm** (consigliato):
```bash
pnpm install
```

Oppure, se preferisci usare **npm**:
```bash
npm install
```

⚠️ **Possibile errore su Windows**:  
*"Impossibile caricare il file C:\ …. L'esecuzione di script è disabilitata nel sistema"*  

Per risolvere:
1. Apri **PowerShell** come amministratore  
2. Esegui il comando:
   ```bash
   Set-ExecutionPolicy RemoteSigned
   ```
3. Conferma con **S (Sì)**  

---

### ▶️ Avviare l'Applicazione
Avvia il server di sviluppo con **pnpm**:
```bash
pnpm dev
```

Oppure, se usi **npm**:
```bash
npm run dev
```

Se tutto va a buon fine, vedrai un messaggio simile:
```bash
VITE vX.Y.Z ready in Zms
➜ Local:   http://localhost:5173/
➜ Network: use --host to expose
➜ press h to show help
```

Ora puoi aprire il browser (Chrome, Firefox, Edge, Safari) e visitare:  
👉 [http://localhost:5173/](http://localhost:5173/)

---

## 🛠️ Tecnologie Utilizzate
- ⚛️ [React](https://react.dev/) – UI framework  
- ⚡ [Vite](https://vitejs.dev/) – build tool e dev server  
- 📦 [pnpm](https://pnpm.io/) – package manager (alternativa a npm)  

---

## 📜 Licenza
Questo progetto è distribuito sotto licenza **MIT**.  
Vedi il file [LICENSE](LICENSE) per maggiori informazioni.
