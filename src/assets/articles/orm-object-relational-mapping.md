---
title: "ORM: Object Relational Mapping"
date: "2018-07-17"
slug: "orm-object-relational-mapping"
wordpress_id: 442
---

L’ORM è una tecnica di programmazione che permette di “mappare” oggetti di un qualsiasi linguaggio Object-Oriented su di un Database Relazionale, che permette di fatto di superare il limite tra database relazionale e grafo degli oggetti.

Esempi di tool che sfruttano questa tecnica? Primi tra tutti ***Hibernate***, diventato famoso sopratutto in ambiente Java, ed ***Entity Framework***.

Uno dei punti di forza degli ORM è la sua portabilità dispetto al DBMS: cambiando DBMS non vanno riscritte parti che riguardano lo strato i persistenza, basta una configurazione.

Utilizzare un ORM inoltre può consentire di risparmiare molto tempo per la creazione di CRUD, perché di base fornisce già da sé il codice necessario.

I vari tool poi offrono molte facilities, come ad esempio la gestione della concorrenza, il caching dei dati, il design pattern delle Unit Of Work.
