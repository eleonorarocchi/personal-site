---
title: "Maven: cos'è e come si installa"
date: "2018-01-04"
slug: "maven-cose-e-come-si-installa"
wordpress_id: 142
---

Maven è un progetto open source, sviluppato dalla Apache, che permette di organizzare in modo molto efficiente un progetto java.
Installazione

1. Dal sito ufficiale (http://maven.apache.org/download.cgi) si deve scaricare il pacchetto zip (ad es. apache-maven-3.5.2-bin.zip) che va poi scompattato nella cartella dove lo si vuole installare (ad es. C:\Maven).
2. Bisogna poi aggiungere la variabile di ambiente *MAVEN\_HOME (in questo caso da terminale si può digitare set MAVEN\_HOME=C:\Maven e verificare poi l'effettiva creazione con echo %MAVEN\_HOME% )*.
3. Poi va settata  anche la cartella bin alla variabile d’ambiente sempre da terminale con il comando set PATH=%MAVEN\_HOME%\bin;%PATH%

Per verificare che l’installazione di Maven sia andata a buon fine, è sufficiente lanciare il comando “mvn” da riga di comando.
![](http://www.eleonorarocchi.it/wp-content/uploads/2018/01/maven.png?w=300)
