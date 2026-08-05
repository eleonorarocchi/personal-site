---
title: "Struttura base app AngularJS"
date: "2018-09-05"
slug: "struttura-base-app-angularjs"
wordpress_id: 152
---

Per creare app AngularJs scalabili e manutenibili è consigliabile basare la scrittura dell’applicazione organizzandola secondo una struttura che dovrebbe essere il più possibile modulare.
Ecco una struttura di esempio:
`app/
----- shared/
---------- sidebar/
--------------- sidebarDirective.js
--------------- sidebarView.html
---------- article/
--------------- articleDirective.js
--------------- articleView.html
----- components/
---------- home/
--------------- homeController.js
--------------- homeService.js
--------------- homeView.html
---------- blog/
--------------- blogController.js
--------------- blogService.js
--------------- blogView.html
----- app.module.js
----- app.routes.js
assets/
----- img/
----- css/
----- js/
----- libs/
node_modules/
index.html`
Possiamo trovare:

- • index.html: gestisce il caricamento di tutte le librerie e gli elementi di AngularJs
  • cartella asset: contiene tutte le risorse non correlate al codice AngularJS (ad esempio file di immagini, fogli di stile, librerie javascript o di altro tipo).
  • cartella app: contiene il cuore dell’applicazione. Questa cartella dovrebbe contenere:
  o app.module.js: gestisce le configurazioni dell’applicazione e carica le dipendenze AngularJs
  o app.route.js: gestisce i percorsi di progetto
  o cartella shared: contiene le singole direttive che possono essere riutilizzate in più pagine (ad esempio le definizioni di menu, di header, di footer….)
  o cartella components: contiene le sezioni effettive dell’applicazione. Per ciascuna pagina quindi la cartella dovrebbe contenere una sottocartella dedicata, che contenga i relativi controller servizi e file html. Se la sezione ha più viste correlate (quindi ad esempio più pagine), si può pensare di suddividere il contenuto in sottocartelle: views, controller, services.
  • Cartella node\_modules: contiene i vari pacchetti npm.
