---
title: "Material Icon: come renderle slim"
date: "2019-07-09"
slug: "come-rendere-le-material-icon-slim"
wordpress_id: 197
---

Ti è mai capitato di chiederti come rendere le material icon "slim"?

A me sì. Per un progetto mobile, ho scelto di utilizzare le material icon di Google (se non le hai mai viste, puoi trovare a [questo link](https://material.io/tools/icons/?style=baseline)).

Ce ne sono molte, perciò sono utilissime: è difficile non trovarne una di adatta ai propri scopi.

L'unico difetto che hanno, per conto mio, è che sono molto "cicciose". È possibile scegliere se utilizzare il set "Filled" piuttosto che "Outlined", o "Rounded", o addirittura scegliere le "Two-Tone", ma non è possibile variare la loro weight.

Ho trovato però un escamotage che permette di ottenere buoni risultati: si può infatti settare una proprietà dello style che permette di aggiungere una bordatura colorata alle linee dell'icona, e che nel mio caso mi permette di alleggerirle (è anche possibile al contrario appesantirle, utilizzando la stessa tecnica).

Come rendere le material icon "slim" allora? La proprietà è la seguente:

> -webkit-text-stroke: 2px white;

![ come rendere le material icon slim: base](http://www.eleonorarocchi.it/wp-content/uploads/2019/07/image-2.png)

![ come rendere le material icon slim: stroke](http://www.eleonorarocchi.it/wp-content/uploads/2019/07/image-1.png)
