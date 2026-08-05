---
title: "Cifratura a chiave asimmetrica"
date: "2020-06-03"
slug: "cifratura-a-chiave-asimmetrica"
wordpress_id: 429
---

Dopo aver parlato della [cifratura a chiave simmetrica](https://www.eleonorarocchi.it/cifratura-a-chiave-simmetrica/), ora parliamo della cifratura a chiave asimmetrica.

Nella cifratura a chiave asimmetrica, detta anche cifratura a chiave pubblica e privata, l'informazione segreta, ovvero la chiave di cifratura, è privata, quindi non condivisa con l'interlocutore, con il quale si condivide invece una chiave pubblica.

La crittografia a chiave asimmetrica si basa sulla segretezza della chiave personale.

Oltre alla cifratura, questo tipo di crittografia viene utilizzato per garantire l'autenticazione e per la firma digitale.

Abbiamo detto che impiega due chiavi: una pubblica e una privata. Le due chiavi sono sono generate dal destinatario dell'informazione, e ne tiene una per sé, mentre l'altra la rende pubblica, tramite un canale che deve comunque garantire integrità e autenticazione.

Essendo computazionalmente pesante come operazione, la crittografia asimmetrica non si adatta a messaggi di grandi dimensioni. Pertanto viene spesso adoperata per lo scambio di chiavi segrete per la crittografia simmetrica.

La cifratura e la decifratura nella crittografia asimmetrica sono funzioni matematiche che operano su numeri che rappresentano il testo in chiaro ed il testo cifrato: per questo motivo è più lenta rispetto alla crittografia simmetrica.

Uno degli algoritmi più classici è RSA, che si basa su operazioni matematiche di fattorizzazione.
