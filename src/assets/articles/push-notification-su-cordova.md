---
title: "Push notification su Cordova"
date: "2020-01-15"
slug: "push-notification-su-cordova"
wordpress_id: 338
---

Dopo aver scoperto come configurare la ricezione di notifiche su un progetto iOs, (puoi leggere il mio articolo [qui](https://www.eleonorarocchi.it/configurare-progetto-cordova-per-inviare-notifiche-push-via-fmc-a-ios/)) implementando tutto il codice di ottenimento token da Firebase e di ricezione delle notifiche su AppDelegate.m, mi sono accorta di aver bisogno di ottenere il mio token FCM lato javascript per poterlo poi gestire correttamente in base ad alcune mie necessità funzionali.

Prendendo ispirazione da [ttmind](https://www.ttmind.com/techpost/Firebase-Cloud-Messaging-FCM-using-Cordova-FCM-Plugin), ho potuto sperimentare anche questo approccio, che in seguito condivido con te.

Anzitutto occorre installare l'apposito plugin:

```
> cordova plugin add cordova-plugin-fcm
```

![](https://www.eleonorarocchi.it/wp-content/uploads/2020/01/Schermata-2020-01-15-alle-10.24.29-1024x224.png)

Occorre poi intervenire nel file fcs\_config\_files\_process.js del plugin installato, per correggere i path sia di Android che di iOs:

![](https://www.eleonorarocchi.it/wp-content/uploads/2020/01/Schermata-2020-01-15-alle-10.51.33-1024x455.png)
![](https://www.eleonorarocchi.it/wp-content/uploads/2020/01/Schermata-2020-01-15-alle-10.51.13-1024x224.png)

E nel file index.html in www di Cordova per aggiungere la chiamata al plugin

![](https://www.eleonorarocchi.it/wp-content/uploads/2020/01/Schermata-2020-01-15-alle-10.51.00-1024x347.png)

Infine serve posizionare nella radice del progetto Cordova i due file di configurazione scaricati da Firebase Console, ovvero google-services.json e GoogleService-Info.plist.

Infine basta avviare il prepare del progetto (ad esempio iOs) per ottenere il token.

```
> cordova prepare ios
```

Posso infine ricevere le push notification lato javascript, inserendo il seguente snippet:

```
// Ricevo una notifica da Google Firebare
      FCMPlugin.onNotification(function(data){
          if(data.wasTapped){
            //Notification was received on device tray and tapped by the user.
            window.alert( JSON.stringify(data) );
          }else{
            //Notification was received in foreground. Maybe the user needs to be notified.
            window.alert( JSON.stringify(data) );
          }
        },
        function(msg){
          window.alert('onNotification callback successfully registered: ' + msg);
          console.log('onNotification callback successfully registered: ' + msg);
        },
        function(err){
          window.alert('Error registering onNotification callback: ' + err);
          console.log('Error registering onNotification callback: ' + err);
        }
      )};
```
