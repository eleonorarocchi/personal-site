---
title: "Funzioni hash"
date: "2020-06-03"
slug: "funzioni-hash"
wordpress_id: 431
---

Abbiamo parlato di cifratura [simmetrica](https://www.eleonorarocchi.it/cifratura-a-chiave-simmetrica/) ed [asimmetrica](https://www.eleonorarocchi.it/cifratura-a-chiave-asimmetrica/), ora vediamo le funzioni hash.

Le funzioni hash permettono di garantire l'integrità di un messaggio, ovvero che non sia stato modificato. Si può mandare quindi un messaggio assieme ad un codice generato dal mittente stesso e dipendente dal messaggio.

Questo codice viene elaborato dalla funzione di hash, che si occupa di creare una sorta di immagine compressa, detta digest.

La funzione di hash pertanto ha il compito di ricevere in input un messaggio, di lunghezza variabile, e produrre in output un digest di lunghezza fissa.

Il ricevente può verificare che il messaggio ottenuto sia integro, calcolando lui stesso il digest del messaggio e confrontandolo con quello ricevuto.

## MAC

Il mac è un codice (segreto) di autenticazione. Si ottiene facendo l'hash della concatenazione del messaggio con una chiave segreta. Il messaggio ed il MAC vengono quindi inviati al destinatario, che calcola autonomamente il MAC e lo confronta con quello ricevuto.
