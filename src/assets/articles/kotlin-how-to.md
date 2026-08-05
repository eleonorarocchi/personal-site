---
title: "3, 2, 1... Kotlin! How to"
date: "2019-07-29"
slug: "kotlin-how-to"
wordpress_id: 230
---

Se ti stai chiedendo anche tu cosa sia un Kotlin, questo è il posto giusto per te! Qui puoi trovare un Kotlin: How to per iniziare a capire di cosa si tratta.

Kotlin è un linguaggio di programmazione, relativamente nuovo (è nato infatti nel già lontano 2012); indirizzato alla piattaforma Java e focalizzato all'interoperatività proprio con il codice Java.

Proprio per questo, lavora bene con tutte le librerie ed i framework Java esistenti e con lo stesso livello di performance.

Kotlin può quindi essere usato ovunque è usato Java oggi, per lo sviluppo server-side, per app Android, e molto altro.

Kotlin infatti può essere utilizzato per lo sviluppo server-side di

- web application
- backend di applicazioni mobile (che espone ad esempio API JSON via HTTP)
- microservizi che comunicano con altri microservizi utilizzando protocolli RPC.

oppure può essere utilizzato per lo sviluppo mobile su piattaforma Android.

È un linguaggio di programmazione **statically typed**: questo significa che il tipo di ogni espressione in un programma è noto al momento della compilazione ed il compilatore può confermare che il metodo ed i campi a cui stai accedendo esistono sugli oggetti che stai utilizzando.

Al
contrario di quanto avviene con i linguaggi di programmazione **dynamically****typed**dove
il tipo viene verificato solo al momento dell'esecuzione del codice (es. javascript,
PHP, ma anche Java e C# se si utilizza la reflection).

A
differenza
di Java, Kotlin
non richiede di specificare esplicitamente il tipo di ogni variabile nel codice
sorgente:

Il tipo di una variabile può infatti essere determinato automaticamente dal contesto, consentendo di omettere la dichiarazione del tipo

```
var x = 1   // Kotlin determinerà che x è di tipo int
```

L'abilità del compilatore di determinare i tipi dal contesto è chiamata *type inference*.

Classi, interfacce e generics lavorano in modo molto simile a Java.

C'è però qualcosa di nuovo, come ad esempio i tipi Nullable.

Kotlin è un linguaggio di programmazione **object oriented**, proprio come Java, tuttavia ha un ricco set di funzionalità per supportare la **programmazione funzionale**.

Questi includono:

- functional types: consente infatti alle funzioni di ricevere altre funzioni come parametri o di restituire altre funzioni come risultato
- lambda expressions: permette di sostituire lunghi blocchi di codice con un minimo boilerplate
- data classes: fornisce una sintassi concisa per la creazione di oggetti con valori immutabili

oltre ad un ricco set di API nella libreria standard per lavorare con oggetti e framework in stile funzionale.

## Come lo riconosco (e come lo uso)?

Kotlin, incluso il compilatore, le librerie e tutti i relativi argomenti, è interamente open source e utilizzabile per qualsiasi proposito.

Il codice sorgente di Kotlin è normalmente memorizzato in file con estensioni **.kt**.

Il compilatore analizza il codice sorgente e genera file *.class*.

Si può usare il comando **kotlinc** per compilare il codice da linea di comando e poi usare il comando *java* per eseguire il codice.

```
>> kotlinc <source file or directory> -include-runtime -d <jar name>
>> jav -jar <jar name>
```

## HOW TO: compila da riga di comando

1) All’indirizzo [https://github.com/JetBrains/kotlin/releases/tag/v1.3.41](https://github.com/JetBrains/kotlin/releases/tag/v1.3.41%20scaricare%20il%20pacchetto%20kotlin-compiler-1.3.41.zip) scarica il pacchetto kotlin-compiler-1.3.41.zip

![](http://www.eleonorarocchi.it/wp-content/uploads/2019/07/image-4.png)

Kotlin: download compiler

2) Decomprimi il contenuto in una directory e, facoltativamente, aggiungi la directory bin al percorso di sistema. La directory bin contiene gli script necessari per compilare ed eseguire Kotlin su Windows (c’è anche per OS X e Linux).

3) Copia il percorso della cartella bin di kotlinc.

4) Apri le proprietà di sistema e clicca Variabili d’ambiente.

5) Clicca su PATH e Modifica.

6) Aggiungi il percorso del bin di kotlinc ai percorsi già presenti.

7) Puoi verificare la corretta installazione, da prompt dei comandi:

![](http://www.eleonorarocchi.it/wp-content/uploads/2019/07/image-6.png)

## Come compilare: alternative

Solitamente, sviluppando in Java, è consuetudine utilizzare un sistema di compilazione come Maven, Grandle o Ant per compilare il codice.

Kotlin è compatibile con tutti questi sistemi di compilazione.

![](http://www.eleonorarocchi.it/wp-content/uploads/2019/07/image-7.png)

![](http://www.eleonorarocchi.it/wp-content/uploads/2019/07/image-8.png)

![](http://www.eleonorarocchi.it/wp-content/uploads/2019/07/image-9.png)

## IDE per tutti i gusti

Kotlin offre una bella scelta di IDE open source per lo sviluppo.

IntelliJ IDEA, Android Studio ed Eclipse sono perfettamente supportati.

Nota che IntelliJ IDEA e Kotlin sono stati sviluppati in parallelo ed IntelliJ è l'ambiente di sviluppo più completo disponibile per Kotlin!

Se preferisci utilizzare Android Studio, o Eclipse, puoi installare il plug-in dal plug-in manager o dal Marketplace.

![](http://www.eleonorarocchi.it/wp-content/uploads/2019/07/image-10.png)
