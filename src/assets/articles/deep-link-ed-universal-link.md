---
title: "Deep link ed Universal link"
date: "2020-06-16"
slug: "deep-link-ed-universal-link"
wordpress_id: 434
---

Avete mai sentito parlare di deep link ed universal link? Io sinceramente... no, anche se sapevo benissimo dell'esistenza di ciò che permettono di fare, solo non sapevo che quelli fossero i nomi ad identificare quelle funzioni.

I termini deep link ed universal link identificano in fin dei conti la stessa cosa. Diciamo che deep link viene utilizzato in ambiente Android, mentre universal link in ambiente iOs.

Io avevo bisogno di aprire, tramite un pulsante della mia app, l'applicazione di sistema che gestisce le mail, nei due sistemi iOs e Android, da qui **un link mi avrebbe permesso di confermare un dato, riaprendo l'app**, facendole fare redirect su un apposita funzione che confermava il mio dato (con un servizio REST, ma questo è ininfluente).

**Ecco, questo concetto è proprio quello che permettono di fare deep link ed universal link: aprire la mia applicazione da un url ed eventualmente passare dati e gestire azioni.**

## Come ho utilizzato deep link ed universal link

Premetto che la mia applicazione è ibrida, ma sappiamo bene che per cose di questo tipo i plugin si interfacciano poi a funzionalità native delle applicazioni.

Per la mia app ho utilizzato il plugin di cordova chiamato Cordova Deeplinks Plugin, che trovate qui <https://www.npmjs.com/package/cordova-plugin-deeplinks#ios-web-integration>.

Nella pagina, ma anche nel relativo progetto su [GitHub](https://github.com/e-imaxina/cordova-plugin-deeplinks#readme), è tutto documentato molto bene, anche se devo dire che la parte Android è documentata meglio.

Ad ogni modo, i punti di attenzione secondo me sono questi:

### 1. Installare il plugin

Ovviamente

### 2. Configurare il plugin

Aggiungere nel config.xml la configurazione: in questo caso va settato sia l'host (con name, scheme, path ed event) sia il codice del team di iOs (che si può vedere nel portale Developer di Apple).

Qui da notare che il name corrisponde ad un indirizzo IP, che sarà quello contenuto nella mia mail come link per aprire l'app.

Io ho utilizzato un indirizzo esistente, dichiarando quindi qui al sistema operativo che tale indirizzo dovrà essere aperto attraverso la mia app.

È possibile poi agganciare un qualsiasi path, utilizzando l'asterisco, o definirne uno (nel mio caso /check\*, prendendo quindi ogni path che contenga check e poi qualsiasi cosa).

L'evento è ovviamente l'evento da lanciare una volta approdati nell'app.

### Aggiungere funzione di cattura in index.html

All'interno della funzione javascript di "document ready", va aggiunto il link di cattura dell'universallinks, che eventualmente correda di informazioni i parametri ottenuti dall'url.

```
universalLinks.subscribe('eventName', function (eventData) {
  // do some work
  console.log('Did launch application from the link: ' + eventData.url);
});
```

### File apple-app-site-association

Per la parte iOs rimane un passaggio da fare che consiste nel caricare su web un file apple-app-site-association. Il file viene generato automaticamente dal plugin, infatti nella directory di progetto si può trovare bello pronto.

Va però aggiornato in alcuni suoi riferimento, come ad esempio il bundle ID dell'app e il team ID apple.

Qui si necessità però anche di un accorgimento: il file dev'essere raggiungibile sul server pertanto occorre verificare le configurazioni del web server.

In particolare ho verificato di avere nel mio web.config le seguenti righe (il mio backend è in .NET)

### Progetto xCode

Sempre lato iOs, occorrono alcune altre attenzioni.

Sul portale Apple Developer occorre verificare che al bundle id sia abilitata la voce "Associated Domains".

![Associated Domains](https://www.eleonorarocchi.it/wp-content/uploads/2020/06/image.png)

Associated Domains

Così come all'interno del progetto xCode, la voce sia fleggata.
