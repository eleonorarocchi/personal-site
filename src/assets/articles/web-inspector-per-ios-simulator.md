---
title: "Web Inspector per iOS Simulator"
date: "2019-07-17"
slug: "web-inspector-per-ios-simulator"
wordpress_id: 201
---

Quando si sviluppa un'app ibrida, può essere utile sfruttare il Web Inspector per iOS Simulator.

Se sei uno sviluppatore web sicuramente ti sarà capitato di utilizzare il tasto F12 sul browser per ispezionare il tuo codice così da capire dove intervenire o fare delle modifiche al volo da riportare poi sul progetto in sviluppo. Sul desktop infatti ci sono potenti strumenti di debug e la maggior parte dei browser hanno un web inspector di qualche tipo.

Puoi fare una cosa simile su iOs se stai sviluppando un'app ibrida, con la possibilità di ispezionare il codice e fare modifiche volatili.

![Risultati immagini per web Inspector per iOS Simulator](https://d2mxuefqeaa7sj.cloudfront.net/s_4AA95B9B47E0E89C5BA120F0BB2F6CD71C1C414A6015C3CB547EE524A07947AA_1537485919039_Screen+Shot+2018-09-20+at+4.23.01+PM.png)

`Esempio di come funziona`

In particolare si può:

- Apportare modifiche HTML e CSS in tempo reale.
- Vedere come il tuo sito web/applicazione esegue, con dettagli visuali, eventi JavaScript e richieste di rete.
- Debug di JavaScript tramite punti di interruzione e altri strumenti.
- Visualizzare avvisi ed errori.
- Accedere alla console.
- Ricerche nel DOM.
- Accedere e visualizzare contenuti del sito

## Istruzioni per l'uso: come utilizzare il Web Inspector per iOS Simulator

1. Da XCode avvia una sessione manuale con il simulatore iOS.
2. Apri Safari (desktop).
3. Controlla se  Develop  è nel menu di Safari. Se non lo è:
   - Seleziona Safari -> Preferenze
   - Vai alla scheda Avanzate e seleziona la casella in basso per attivare il menu di sviluppo.
4. Verifica se la web inspector è attiva per iOS Simulator (dovrebbe essere abilitata per impostazione predefinita):
   - Seleziona Impostazioni (per iOS Simulator) -> Safari -> Avanzate (scorri fino alla fine della pagina delle impostazioni) -> Attiva Web inspector.
5. Seleziona iOS Simulator -> Esci da iOS Simulator.
6. Riavvia il simulatore iOS.
7. Apri la tua pagina web o la tua app web in iOS Simulator.
8. In Safari, seleziona Develop -> iOS Simulator -> la tua applicazione o pagina.html

Ora dovresti vedere gli stessi strumenti di sviluppo come se fossi in Safari.

Questa funzionalità è veramente molto comoda. Purtroppo non c'è una cosa altrettanto veloce e funzionale per effettuare gli stessi controlli su Android. O per lo meno io non l'ho ancora trovata!

Aggiornamento: esiste la possibilità di fare una cosa simile anche su Android. Info su <https://developers.google.com/web/tools/chrome-devtools/remote-debugging/>
