---
title: "Di \"TIC SSL Trust Error\" e altri subdoli errori"
date: "2019-07-02"
slug: "di-tic-ssl-trust-error-e-altri-subdoli-errori"
wordpress_id: 190
---

Sviluppando per iOs può capitare di dover accedere a WebService o link esterni alla propria applicazione. A causa delle restrizioni imposte da Apple però, visualizzare le informazioni può non essere così immediato.

Il primo consiglio è di utilizzare link con https.

In secondo luogo serve assicurarsi di aver dato le autorizzazioni necessarie ad accedere ad indirizzi, aggiungendo nel .plist la seguente regola:

![enter image description here](https://i.stack.imgur.com/Y9BnU.png)

Può succedere però che si incappi in un ulteriore errore segnalato nel terminal di XCode: il TIC SSL Trust Error.

Per toglierci questo errore dall'elenco dei problemi da sistemare, è sufficiente inserire nel AppDelegate.m il seguente snippet:

```
@implementation NSURLRequest(DataController)
+ (BOOL)allowsAnyHTTPSCertificateForHost:(NSString *)host{
    return YES;
}
@end
```

E il gioco è fatto!
