---
title: "Lazy loading"
date: "2019-03-16"
slug: "lazy-loading"
wordpress_id: 162
---

> Da: <https://www.html.it/pag/18603/il-concetto-di-lazy-loading>

Dall’avvento di tecniche client-side come AJAX, le pagine Web sono sempre più complesse e pesanti: parte dell’elaborazione è infatti a carico del client.
AJAX ha trasformato dei semplici siti web in vere e proprie applicazioni che spesso rendono il lavoro più rapido una volta inizializzate, ma richiedono più tempo per poter scaricare tutti gli script necessari al loro funzionamento.
Il lazy loading è una particolare tecnica che cerca di risolvere questo problema di performance, sentito soprattutto su connessioni analogiche non a banda larga.
Con Lazy Loading (caricamento pigro) si intende un **download di script on demand**, ovvero solamente quando essi sono effettivamente necessari per il prosieguo dell’applicazione.
Ad esempio, è possibile forzare il download dello script di inizializzazione di un determinato componente solamente nel momento in cui l’utente necessita di quel componente. Una successiva interazione con il componente già precedentemente aperto, non farà scaricare nuovamente lo script, in quanto già scaricato precedentemente. Questa tecnica presenta quindi notevoli **vantaggi**:

- l’inizializzazione dell’applicazione è più rapida;
- il carico globale di banda è inferiore, in quanto viene scaricato solamente JavaScript necessario
- esiste la possibilità di creare JavaScript personalizzato che viene scaricato successivamente a fronte di particolari comportamenti dell’utente;
- è possibile bypassare la “same-domain policy” in quanto è possibile scaricare script da qualsiasi dominio, anche diverso da quello corrente.

La tecnica di Lazy Loading può essere attuata tramite due diversi approcci: ***Ajax Lazy Loading*** (ALL) e ***DOM Lazy Loading*** (DLL).

## Ajax Lazy Loading (ALL)

Il primo approccio, che chiamiamo Ajax Lazy Loading (ALL) permette di scaricare un nuovo script JavaScript tramite una richiesta `XmlHttpRequest` e integra il codice grazie alla funzione `eval()` che valuta uno script a partire da una stringa.
In questo modo qualsiasi porzione di codice non espressamente inserita all’interno di una funzione o di un oggetto sarà al termine del download dello script. Le richieste possono essere fatte sia in maniera sincrona, quindi bloccando il client in attesa del nuovo script (comodo dal punto di vista dello sviluppo ma pessimo come usabilità), sia in maniera asincrona (usabile ma spesso di difficile interpretazione e realizzazione per lo sviluppatore).
Una possibile soluzione a questo secondo problema può essere quella di utilizzare una libreria di **continuation trasformer**che permette di effettuare richieste asincrone in maniera semplice e soprattutto senza perdersi tra decine di funzioni callback che sono fonte di preoccupazioni e di bug.

## DOM Lazy Loading

Il secondo approccio, più orientato alla modifica del DOM della pagina (che quindi chiameremo DOM Lazy Loading, DLL) garantisce il download di un nuovo script inserendo un nuovo elemento `<script>` all’interno dell’elemento `<head>` della pagina, tramite la manipolazione del DOM.

## Il confronto

- entrambi gli approcci permettono di eseguire codice JavaScript (non inserito in funzioni e oggetti) appena terminato il download e di definire funzioni per un utilizzo futuro;
- tramite il DLL è possibile scaricare script anche da domini differenti rispetto a quello di origine (non possibile tramite l’utilizzo dell’oggetto `XmlHttpRequest`);
- tramite l’ALL è possibile essere più flessibili riguardo sia alla richiesta che alla risposta ricevuta, per esempio è possibile effettuare chiamate POST passando parametri complessi o ricevere script JavaScript all’interno per esempio di richieste SOAP o XML, mentre utilizzando il DLL è obbligatorio puntare verso una specifica risorsa JS;
- la cache del browser viene attivata solamente tramite DLL, quindi in caso contrario è necessario un controllo esplicito per evitare doppie richieste.
