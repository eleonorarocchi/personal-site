---
title: "Cifratura a chiave simmetrica"
date: "2020-06-02"
slug: "cifratura-a-chiave-simmetrica"
wordpress_id: 426
---

La cifratura a chiave simmetrica, detta anche a chiave privata, permette la comunicazione tra due entità assicurando il principio di segretezza, detto anche di confidenzialità (se vuoi vedere quali siano i principi di sicurezza, leggi l'articolo [La sicurezza informatica su internet](https://www.eleonorarocchi.it/la-sicurezza-informatica-su-interne/))

Poniamo il caso che Alice voglia inviare un messaggio a Bob. Sia Alice che Bob devono essere a conoscenza della stessa chiave di cifratura, che ovviamente dev'essere segreta.

Alice dovrà prendere il messaggio in chiaro che vuole trasmettere, cifrarlo con un apposito algoritmo che si basi sulla chiave privata, e inviarlo a Bob, che con un algoritmo di decifratura e la chiave privata sarà in grado di decifrarlo per ottenere il messaggio originale.

La stessa chiave può essere utilizzata per una comunicazione bidirezionale.

I due algoritmi di cifratura e decifratura sono l'uno l'inverso dell'altro, e applicati in sequenza su di un messaggio consentono di ottenere il messaggio originale.

L'importante è quindi che le due entità conoscano entrambe la chiave di cifratura che dev'essere stata cambiata in precedenza tramite un canale sicuro.

## Esempi di cifratura a chiave simmetrica

Gli algoritmo possono essere di sostituzione o di trasposizione.

### Algoritmi di sostituzione

Si applicano al messaggio in chiaro, quindi a simboli alfabetici, e si basano sulla sostituzione di ogni simbolo con un altro.

Possono essere:

monoalfabetici (ad esempio quello di Cesare, che scorreva l'alfabeto di tre lettere): ogni lettera dell'alfabeto corrisponde ad un'altra indipendentemente dalla posizione nel messaggio in chiaro. Possono essere vulnerabili ad attacchi di forza bruta. Può essere meglio dello scorrimento utilizzare un mapping.

polialfabetici: le diverse occorrenze dello stesso carattere possono corrispondere a sostituzioni differenti. Hanno il vantaggio di nascondere la frequenza delle lettere.

### Algoritmi di trasposizione

Si cambiano le posizioni dei simboli rispetto al messaggio in chiaro.

Si può poi pensare di utilizzare cifrari a blocchi, o combinati.

I cifrari moderni invece che cifrare a caratteri, cifrano a bit.

**La crittografia a chiave simmetrica si basa sulla condivisione della chiave segreta.**
