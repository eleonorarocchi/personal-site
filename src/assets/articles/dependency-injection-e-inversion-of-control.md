---
title: "Dependency Injection e Inversion of Control"
date: "2019-03-16"
slug: "dependency-injection-e-inversion-of-control"
wordpress_id: 160
---

**Inversion of Control** (o *IoC*), un concetto piuttosto ampio che descrive un approccio tipico dei moderni framework: non sono più i componenti *custom* del progetto a richiamare gli elementi del framework, ma, viceversa, è il framework a ricercare i componenti specifici dell’applicazione e integrarli.
In questo, dunque, consiste la famosa *inversione di controllo* di cui tanto si parla. Il framework non è più un monolite che espone delle funzionalità predefinite, ma è un nucleo estendibile tramite logiche personalizzate, in maniera modulare.
La **Dependency injection** è una delle diverse implementazioni che la *Inversion of Control* può avere. Nello specifico, si tratta di un *design pattern* (ovvero uno schema utilizzabile nel progettare un sistema) della programmazione orientata agli oggetti il cui scopo è quello di semplificare lo sviluppo e migliorare la testabilità di software di grandi dimensioni.
*Ogni volta che la dipendenza concreta viene fornita nel costruttore specificando come parametro l’interfaccia e non la classe concreta si parla di Dependency Injection.*
Concretamente, quando una classe A utilizza un’altra classe B, allora A dipende da B.
A non può svolgere il suo lavoro senza B, ed A non può essere riutilizzata senza anche riutilizzare B. In tale situazione la classe A è chiamata “dipendente” e la classe B si chiama “dipendenza”.
Detto questo risulta piuttosto evidente perché le dipendenze sono negative. Esse riducono il riutilizzo che invece ha un notevole impatto positivo sulla velocità di sviluppo, la qualità e la leggibilità del codice.
Per utilizzare la *Dependency injection* è sufficiente dichiarare le dipendenze di cui un componente necessita (dette anche interface contracts). Quando il componente verrà istanziato, un iniettore si prenderà carico di risolvere le dipendenze (attuando dunque l'inversione del controllo). Se è la prima volta che si tenta di risolvere una dipendenza l'injector istanzierà il componente dipendente, lo salverà in un contenitore di istanze e lo restituirà. Se non è la prima volta, allora restituirà la copia salvata nel contenitore. Una volta risolte tutte le dipendenze, il controllo può tornare al componente applicativo.
Il pattern Dependency Injection coinvolge almeno tre elementi:

- una componente dipendente,
- la dichiarazione delle dipendenze del componente, definite come interface contracts,
- un injector (chiamato anche provider o container) che crea, a richiesta, le istanze delle classi che implementano delle dependency interfaces.

Ci sono più modi con cui le dipendenze possono essere iniettate. Ciascuno presenta vantaggi e svantaggi da considerare al momento della scelta.

### Constructor-Injection

Si tratta sicuramente della modalità più utilizzata. L’idea di base è che tutti i collaboratori (le dipendenze) debbano essere iniettati nel costruttore, quindi dovranno essere forniti prima di poter creare un’istanza dell’oggetto.
`$dep = new Dependency();`
`$obj = new MyClass($dep);`
**Pro**

1. Se la dipendenza è un requisito e la classe non può funzionare senza, iniettarla tramite il costruttore ci assicura che è presente quando l’oggetto la utilizzerà visto che l’oggetto non può essere istanziato senza di essa.
2. Visto che il costruttore viene chiamato solo una volta quando l’oggetto viene creato, se lo desideriamo, siamo sicuri che la dipendenza non cambierà durante la vita dell’oggetto.
3. In caso di molte dipendenze avremo soltanto un costruttore con molti argomenti.

**Contro**

1. Non è possibile l’iniezione parziale delle dipendenze visto che dobbiamo passare tutti gli argomenti al costruttore in fase di creazione dell’oggetto.
2. Da questo si evince che non è adatta per lavorare con le dipendenze opzionali.
3. L’oggetto risulta immutabile e quindi non riconfigurare.

### Setter-Injection

L’idea di base è che abbiamo un costruttore senza argomenti, e le dipendenze vengono passate attraverso i metodi setter (spesso si utilizza un prefisso *init* nella dichiarazione del metodo).

`$dep = new Dependency();`
`$obj = new MyClass();`
`$obj->initDep($dep);`

**Pro**

1. Rende possibile l’iniezione parziale delle dipendenze.
2. Funziona bene con le dipendenze opzionali. Se non avete bisogno della dipendenza, basta non chiamare il setter.
3. Rende mutabile l’oggetto attraverso re-iniezione delle dipendenze, chiamando il setter più volte.

**Contro**

1. In caso di molte dipendenze dovremmo scrivere altrettanti setter.
2. Non si può essere sicuri che il setter sarà chiamato e quindi è necessario aggiungere dei controlli per assicurarci che le dipendenze richieste siamo iniettate.

### Property Injection

Con questa modalità (chiamata anche Field Injection) le dipendenze vengono iniettate direttamente nelle proprietà pubbliche della classe.
`$dep = new Dependency();
$obj = new MyClass();
$obj->_dep = $dep;`
Si tratta di una soluzione poco utilizzata e per certi versi simile alla Setter Injection. Ha tutti gli aspetti negativi della Setter Injection, in più non essendo possibile utilizzare il type hinting non siamo neanche in grado di assicurarci che le dipendenze passate siano del tipo gusto.
A prima vista la Setter Injection potrebbe apparire la migliore o quantomeno preferibile visto che non vengono passati argomenti al costruttore, rendendo così più semplice la creazione di oggetti in ambiente di produzione o test. Inoltre molti la sostengono perché passare un gran numero di dipendenze (argomenti) al costruttore può risultare poco maneggevole, soprattutto quando alcune dipendenze sono opzionali.
La Constructor Injection invece impone l’ordine di inizializzazione degli oggetti e previene da dipendenze circolari.
Con la Setter Injection non è chiaro in quale ordine le cose devono essere istanziate, e non garantisce che questo venga fatto. Ci troviamo così costretti a dover controllare che la dipendenza sia stata istanziata ogni volta che la dobbiamo usare, visto che non c’è niente che ci garantisca che questo sia stato fatto.
In altre parole la Constructor Injection forza l’ordine e la completezza delle istanziazioni.
L’aspetto negativo principale della Constructor Injection è che non permette la riconfigurazione dell’oggetto re-iniettando nuove dipendenze.
Se si vuole “riconfigurare” il dipendente, si dovrà crearne una nuova istanza utilizzando le nuove dipendenze e scartare l’altra.
