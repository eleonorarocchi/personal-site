---
title: "Creare una web application con Angular7"
date: "2019-06-17"
slug: "creare-una-web-application-con-angular7"
wordpress_id: 183
---

Creare una web application con Angular7 è davvero molto semplice. Con i pochi passi che tra poco descriverò, si può avere da subito un'app base ma funzionante.

Il tutto si può fare facilmente da console Windows o da Terminal OsX.

**1)** **Definire la directory principale**  
 Fin qui pochi problemi: scelgo un posto su disco e creo una nuova cartella.

**2) Installare la versione di Angular che ci interessa**  
Una volta creata la cartella base (passo 1), ed entratici dentro, occorre installare una versione di Android. Nel nostro caso scegliamo la 7. Per effettuare questo passaggio ci serve aver installato a sistema l'ultima versione di NodeJs. Il comando da lanciare su terminale/console è il seguente:

```
npm install @angular/cli@7
```

**3) Creare il progetto Angular**  
Scegliamo un bel nome per il nostro progetto, ad esempio MyApp (che è un nome bellissimo per iniziare!) e digitiamo:

```
ng new MyApp
```

**4) Aggiornare rxjs**

Potrebbe essere necessario ora aggiornare la versione di rxjs (nel caso in cui avessimo versioni di Angular diverse preinstallate)

```
npm install rxjs@6.0.0 --save
```

**5) Avviare il progetto e vederlo funzionare su browser**  
Eh sì, abbiamo fatto tutto, la nostra splendida MyApp è pronta e la possiamo non solo compilare, ma vedere su browser con un unico comando (anzi due, ops): prima apro la cartella di progetto, e poi lancio compilazione e apertura su browser.

```
cd MyApp 
ng serve --open
```

Potrei voler guardare la MyApp su browser del cellulare, con smartphone e pc collegati alla stessa retet WiFi.  
In questo caso basta aggiungere l'ip del pc e poi da cellulare aprire quell'ip

```
ng serve --host 172.17.43.68
```

**6) Distribuire l'app angular su web server**

Anche qui il tutto è molto semplice. Basta lanciare il comando:

```
npm run build
```

e copiare il contenuto della cartella dist sul server web (attenzione ai path, alcuni riferimenti ai percorsi potrebbero essere da correggere)

Ti chiedevi come creare una web application con Angular7? That's all!

Quanto ti ho raccontato però è solo la cima dell'iceberg!

Puoi trovare molte più informazioni sul sito web dedicato ( <https://angular.io/> ). Personalmente ho trovato molto utile iniziare dallo " Tour of Heroes App and Tutorial ". Che aspetti? Corri a provare!
