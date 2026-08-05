---
title: "Struttura base app NodeJs"
date: "2018-09-05"
slug: "struttura-base-app-nodejs"
wordpress_id: 155
---

Per creare app NodeJs scalabili e manutenibili è consigliabile basare la scrittura dell’applicazione organizzandola secondo una struttura che dovrebbe essere il più possibile modulare.
Ciò significa che divideremo l’applicazione in moduli dove ciascun modulo è un'entità di business.
`app/
----config/
--------routes.js
--------settings.js
--------index.js
----common/
--------index.js
----articles/
--------routes/
------------index.js
--------controllers/
------------index.js
------------index-test.js
--------models/
------------index.js
------------index-test.js
--------repositories/
------------index.js
------------index-test.js
--------views/
------------index.jade
----profiles/
--------routes/
------------index.js
--------controllers/
------------index.js
------------index-test.js
--------models/
------------index.js
------------index-test.js
--------repositories/
------------index.js
------------index-test.js
--------views/
------------index.ejs`
----views/
--------layouts/
------------index.js
----index.js
----package.json
In questo esempio è importante notare che ciascun modulo è autosufficiente.
Possiamo trovare:

- Cartella common: contiene codici comuni a diversi moduli. Ad esempio: parser, funzioni di manipolazione dei dati, ecc.
- Cartella test all'interno di ogni livello: contiene tutto il codice “in prova”, in questo modo i test saranno a fianco dell'implementazione e sarà chiaro distinguerli dal codice già pronto e funzionante.
- Cartelle routes: ogni modulo contiene le proprie routes.
- Cartellla config: contiene le impostazioni a livello applicazione.
- Cartella views: rimane solo per memorizzare layout generali, comuni ai vari moduli.
