---
title: "Cordova Xcode build failed “Permission denied”"
date: "2020-01-15"
slug: "cordova-xcode-build-failed-permission-denied"
wordpress_id: 322
---

Se quando compili la tua soluzione ottieni questo errore:

```
cordova/lib/copy-www-build-step.sh: Permission denied
```

puoi risolvere il problema dando le autorizzazioni necessarie, lanciando da terminale il seguente comando:

```
cd platforms/ios/cordova/lib
sudo chmod +x copy-www-build-step.sh

 /platforms/ios/MyApp/Scripts but this chmod +x thing worked
```
