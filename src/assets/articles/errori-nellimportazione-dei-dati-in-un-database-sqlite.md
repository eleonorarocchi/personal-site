---
title: "Errori nell'importazione dei dati in un database SQLite"
date: "2017-01-02"
slug: "errori-nellimportazione-dei-dati-in-un-database-sqlite"
wordpress_id: 32
---

Per valorizzare il database della mia app, scarico tutti i dati da un web service remoto pubblicato su un server e accessibile ad un indirizzo pubblico.
Mi capitava spesso che si inceppasse il download dei dati, mandando in crash l'applicazione.
A quanto pare il problema nasceva da diversi errori in fase di modellazione: il mio xcdatamodel era modellato in modo errato, infatti c'era una relazione tra due tabelle (one to many) che in fase di popolamento diventava ricorsivo.
 
Capitava anche però un altro guaio, in fase di sviluppo capita spesso di dover disinstallare la app dal simulatore e reinstallarla eseguendo in Run: anche in questo caso, durante la sincronizzazione dei dati, l'esecuzione andava in crash.
Per la risoluzione del problema speravo fosse sufficiente settare a YES la voce "Suppress momc warnings on missing inverse relationships".
![data_model_compiler_warning](http://www.eleonorarocchi.it/wp-content/uploads/2017/01/data_model_compiler_warning.png?w=300)
Ma ovviamente, nascondere gli warning... non può essere una soluzione....
Non sono ancora riuscita a capire cosa succeda... ho quindi cercato uno workarround, che al momento sembra aver messo una pezza sul problema... sicuramente lo dovrò riprendere in mano in seguito.
L'errore si verificava (diverso) in due punti, e in questi due punti ho inserito un blocco try catch, così da far proseguire comunque la sincronizzazione.
Inserire blocchi try catch non mi ha aiutata, l'eccezione comunque si verificava, facendo crashare l'applicazione, eseguendo da xcode l'errore segnalato era: exc\_bad\_access.
Alla fine ho trovato la soluzione, impazzendo nel mezzo...
In AppDelegate.m, nel metodo che restituisce il backgroundContext, ho fatto si che il tipo do concorrenza fosse NSPrivateQueueConcurrencyType al posto di NSMainQueueConcurrencyType, come da esempio:
`-(NSManagedObjectContext *)backgroundContext{
if(_backgroundContext != nil){
return _backgroundContext;
}
NSPersistentStoreCoordinator *coordinator = [self persistentStoreCoordinator];
if (coordinator != nil){
// _backgroundContext = [[NSManagedObjectContext alloc] initWithConcurrencyType: NSMainQueueConcurrencyType];
_backgroundContext = [[NSManagedObjectContext alloc] initWithConcurrencyType:NSPrivateQueueConcurrencyType];
[_backgroundContext setPersistentStoreCoordinator:_persistentStoreCoordinator];
}
return _backgroundContext;
}`
Questo ha risolto il mio problema di concorrenza durante la sincronizzazione.
