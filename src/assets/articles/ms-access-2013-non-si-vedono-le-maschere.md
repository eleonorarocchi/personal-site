---
title: "MS Access 2013: non si vedono le maschere"
date: "2019-11-15"
slug: "ms-access-2013-non-si-vedono-le-maschere"
wordpress_id: 280
---

Mi è capitato oggi di dover aprire un file di Access creato da un'altra persona.

Il file è stato fatto con Access 2013 e la persona che me l'ha passato mi ha avvertita della possibilità di incontrare dei problemi a causa di un aggiornamento di Windows di qualche giorno fa: KB4484119 (a questo [link](https://www.computerworld.com/article/3453322/patch-tuesday-arrives-with-access-error-1909-in-tow-and-a-promise-of-no-more-optional-patches-this.html) puoi nel caso trovare qualche informazione in più al riguardo).

Il mio problema tuttavia non era legato a questo aggiornamento, che fatalità nel mio pc non risulta.

All'apertura del file, come spesso accade, mi veniva chiesto di abilitare l'esecuzione del contenuto, che di per sé per questioni di sicurezza viene altrimenti disabilitato.

![Microsoft Access 2013: abilita contenuto](http://www.eleonorarocchi.it/wp-content/uploads/2019/11/image-1024x555.png)

Dato il consenso però, il file diventava praticamente inutilizzabile: la prospettiva principale diventava bianca e nessun menu era selezionabile.

![Microsoft Access 2013: non si vedono le maschere ed i menu](http://www.eleonorarocchi.it/wp-content/uploads/2019/11/image-2-1024x557.png)

La prima strada percorsa per risolvere il problema è stato "ampliare" le restrizioni all'esecuzione delle macro. Certo: il contenuto era sicuro ;-)

![Attiva tutte le macro](http://www.eleonorarocchi.it/wp-content/uploads/2019/11/image-1.png)

Ma nulla è cambiato.

Ho percorso una strada diversa. Ho aperto il file con doppio click finché tenevo premuto il tasto SHIFT della tastiera, così da aprirlo in modalità progettazione.

Mi si è presentata quindi la struttura dei form, e provando ad aprirne uno, un errore è balzato all'attenzione:

![Errore di compilazione: il codice del progetto deve essere aggiornato per l'utilizzo in sistemi a 64 bit. Esaminare e aggiornare le istruzioni Declare, quindi contrassegnarle con l'attrivuto PtrSafe.](http://www.eleonorarocchi.it/wp-content/uploads/2019/11/image-3.png)

Il mio problema era quindi dovuto al fatto che il mio sistema è basato su architettura a 64 bit, mente evidentemente la persona che mi ha fornito il file aveva un architettura a 32.

Quindi è stato sufficiente effettuare una sostituzione in tutto il codice, andando ad aggiungere alle dichiarazioni "Declare" la parola "PtrSafe" (ulteriori info si possono trovare a [questo indirizzo](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/ptrsafe-keyword)).

Fatto questo, il file funzionava alla perfezione!
