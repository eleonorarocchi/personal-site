---
title: "Persistenza dati in sessione in app"
date: "2018-09-05"
slug: "persistenza-dati-in-sessione-in-app"
wordpress_id: 159
---

LocalStorage e sessionStorage sono entrambi i cosiddetti WebStorage e appartengono allefunzionalità di HTML5:

- localStorage memorizza le informazioni senza limiti di tempo, a condizione che l'utente non le elimini cancellando la cache del browser. I dati sono accessibili solo al dominio che inizialmente memorizzava i dati.
- sessionStorage memorizza le informazioni finché dura la sessione. Solitamente fino a quando l'utente chiude la scheda / browser. Inoltre i dati memorizzati nell'oggetto sessionStorage sono accessibili solo dalla pagina che inizialmente memorizzava i dati.

Una terza via sono i cookie che sono supportati anche dai browser più vecchi e di solito sono un fallback per i framework che utilizzano i WebStorage sopra menzionati.
Nei cookie però si possono memorizzare meno informazioni rispetto agli WebStorage, infatti i cookie contengono solo dati a 4kb, mentre localStorage contiene dai 2 MB per i dispositivi mobile a 10MB per dispositivi desktop di dati che cancellerà quando l'utente cancella la cache.
La scelta di utilizzare WebStorage quindi potrebbe essere la migliore, considerando di dare supporto però solo ai browser più moderni.
