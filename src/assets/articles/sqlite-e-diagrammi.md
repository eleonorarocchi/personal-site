---
title: "SQLite e diagrammi"
date: "2017-01-02"
slug: "sqlite-e-diagrammi"
wordpress_id: 25
---

Avevo bisogno di un tool che dato un database SQLite potesse visualizzarmi il relativo diagramma entità-relazione.
Ho provato DbVisualizer by DbVis Software (<http://www.dbvis.com/>)
Ad una prima navigata non sembra niente male, tuttavia a me serviva qualcosa che mostrasse le relazioni di un db SQLite che nasce da un .xcdatamodel di iOs. Purtroppo le relazioni qui non sono visibili, il diagramma generato ne è privo.
Mi è venuto allora un dubbio... vuoi proprio che già di suo XCode non abbia niente a questo scopo? E' stato sufficiente allora aprire un po' gli occhi...
[caption id="" align="alignnone" width="1360"]![Entity inheritance diagram](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/CoreData/Art/Entity_Inheritence_2_2x.png) Entity inheritance diagram[/caption]
 
Tutte le informazioni si possono facilmente reperire su sito Apple dedicato allo sviluppo: https://developer.apple.com
 
Potrebbe essere anche comodo stampare il diagramma, tuttavia XCode propone una stampa multipagina.
Per stampare tutto in una singola pagina allora basta fare così:

- "File"->"Page Setup…"
- "Paper Size"->"Manage Custom Sizes…"
- Definire una nuova dimensione 1000x1000 mm e senza bordi
- "File"->"Print…"
- Scegliere "PDF"->"Open PDF in Preview"
- "Tools"->"Rectangular Selection", selezionare l'area a piacimento
- "Tools"->"Crop"
- "File"->"Print…", e quindi stampare.
