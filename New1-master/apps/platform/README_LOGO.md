# Istruzioni per sostituire il logo Lisprocoin

Per completare la sostituzione del logo Gamba con il logo Lisprocoin, segui questi passaggi:

## 1. Logo principale SVG
Il file `public/logo.svg` è già stato sostituito con il logo Lisprocoin.

## 2. Favicon e icone
È necessario convertire i file SVG in PNG:

1. Apri il file `public/logo-convert.html` in un browser web
2. Usa gli strumenti di sviluppo del browser per catturare l'immagine SVG
3. Salva l'immagine nei seguenti formati:
   - `public/favicon.png` (icona piccola)
   - `public/icon-192.png` (icona media)
   - `public/icon-512.png` (icona grande)

In alternativa, puoi utilizzare il file SVG semplificato `public/favicon.svg` per creare l'icona favicon.png.

## 3. Verifica
Dopo aver sostituito tutte le immagini, avvia l'applicazione con:
```
pnpm run dev
```

Il nuovo logo Lisprocoin dovrebbe apparire nell'interfaccia dell'applicazione.

## Modifiche già apportate
- Sostituito l'indirizzo del wallet con: EPqPP8mSk4bFNfk5cAg9hGR6XPLwh9Rp3Lo4wDiLEdRZ
- Cambiato il nome dell'app da "Gamba" a "Lisprocoin"
- Aggiornato i link da gamba.so a lisprocoin.so
- Modificato i riferimenti testuali nel codice

Buon divertimento con la tua nuova app Lisprocoin! 