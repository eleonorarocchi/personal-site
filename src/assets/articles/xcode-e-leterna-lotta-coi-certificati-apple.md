---
title: "Xcode e l'eterna lotta coi certificati Apple"
date: "2019-12-17"
slug: "xcode-e-leterna-lotta-coi-certificati-apple"
wordpress_id: 307
---

Ogni volta che viene aggiornato Xcode, o ogni volta che mi scade un certificato di distribuzione, devo impazzire per riuscire a deployare l'app sul mio iPhone.

Questa volta, dopo molti tentativi e ricerche, mi sono imbattuta nella soluzione proposta dall'utente Fidel di [questo post su StackOverflow](https://stackoverflow.com/questions/49979131/distribution-provision-profile-doesnt-include-signing-certificate-iphone-develo):

Semplicemente occorreva riportare il certificato corretto sull'intero stack di impostazioni di Code Signing Identity.

![](http://www.eleonorarocchi.it/wp-content/uploads/2019/12/Schermata-2019-12-16-alle-10.14.34-1024x299.png)
