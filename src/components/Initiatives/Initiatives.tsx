import React, { FC, useState } from 'react';
import Header from '../Header/Header.tsx';
import './Initiatives.css';

type InitiativeType = 'article' | 'talk' | 'video';

interface Initiative {
    title: string;
    date: string;
    type: InitiativeType;
    link: string;
}

const typeIcon: Record<InitiativeType, string> = {
    article: 'fa-file-text-o',
    talk: 'fa-microphone',
    video: 'fa-youtube-play',
};

const typeLabel: Record<InitiativeType, string> = {
    article: 'Articolo',
    talk: 'Talk',
    video: 'Video',
};

// Aggiungi qui le tue iniziative
// const initiatives: Initiative[] = [
//     {
//         title: "Titolo del tuo articolo su dev.to",
//         date: "Gennaio 2025",
//         type: "article",
//         link: "https://dev.to/eleonorarocchi/",
//     },
//     {
//         title: "Nome del tuo talk in conferenza",
//         date: "Marzo 2024",
//         type: "talk",
//         link: "https://",
//     },
//    /*  {
//         title: "Titolo del tuo video su YouTube",
//         date: "Febbraio 2024",
//         type: "video",
//         link: "https://www.youtube.com/@e-project-b3k",
//     }, */
// ];

const initiatives: Initiative[] = [
  {
    "title": "The Anatomy of an Effective Prompt: Key Techniques from Google’s Guide",
    "date": "Apr 2026",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/the-anatomy-of-an-effective-prompt-key-techniques-from-googles-guide-119c" 
  },
  {
    "title": "Getting Started with the Gemini API: A Practical Guide",
    "date": "Apr 2026",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/getting-started-with-the-gemini-api-a-practical-guide-3hhd"
  },
  {
    "title": "An Agent is born: strumenti, confronti e trade-off",
    "date": "Mar 2026",
    "type": "talk",
    "link": "https://cloudgen-verona.powerappsportals.com/Events/"
  },
  {
    "title": "CSS4Future: che futuro ci attende",
    "date": "Apr 2024",
    "type": "talk",
    "link": "#"
  },
  {
    "title": "Different types of mobile app",
    "date": "Jul 2023",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/different-types-of-mobile-app-h7k"
  },
  {
    "title": "AI: how to include AI in software projects",
    "date": "Jun 2023",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/ai-how-to-include-ai-in-software-projects-2ep0"
  },
  {
    "title": "AI: what else is in AI besides machine learning",
    "date": "Jun 2023",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/ai-what-else-is-in-ai-besides-machine-learning-16f6"
  },
  {
    "title": "AI: what is Machine Learning",
    "date": "Jun 2023",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/ai-what-is-machine-learning-472n"
  },
  {
    "title": "How to start with OramaSearch",
    "date": "Jun 2023",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/how-to-start-with-oramasearch-4fic"
  },
  {
    "title": "Trip on trig: alla scoperta della trigonometria",
    "date": "Mar 2023",
    "type": "talk",
    "link": "https://2023.cssday.it/talks_speakers/index.html"     
  },
  {
    "title": "Where publish nodeJs+Angular app for free",
    "date": "Feb 2023",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/where-publish-nodejs-angular-app-for-free-43g1"
  },
  {
    "title": "No code mobile app? BravoStudio is the answer",
    "date": "Dec 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/no-code-mobile-app-bravostudio-is-the-answer-3g0d"
  },
  {
    "title": "Evoluzione del Frontend Development: back to the future!",
    "date": "Oct 2022",
    "type": "talk",
    "link": "https://www.codemotion.com/search/?text=Evoluzione%20del%20Frontend%20Development%3A%20back%20to%20the%20future%21"
  },
  {
    "title": "Lit: what is public reactive properties",
    "date": "Sep 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/lit-what-is-public-reactive-properties-3mcl"
  },
  {
    "title": "Blackboards, for all tastes and budgets",
    "date": "Aug 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/blackboards-for-all-tastes-and-budgets-m7d"
  },
  {
    "title": "Lit: how can a lit component be defined",
    "date": "Aug 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/lit-how-can-a-lit-component-be-defined-1ggn"
  },
  {
    "title": "UI: some useful resources",
    "date": "Aug 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/ui-some-useful-resources-43fd"
  },
  {
    "title": "Lit: how to use it",
    "date": "Aug 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/lit-how-to-use-it-5bfo"
  },
  {
    "title": "Bootstrap 5: grid system",
    "date": "Aug 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/bootstrap-5-grid-system-3ck9"
  },
  {
    "title": "Angular on Azure: make the routing works",
    "date": "Aug 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/angular-on-azure-make-the-routing-works-374f"
  },
  {
    "title": "What is Lit component",
    "date": "Jul 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/what-is-lit-component-3n0l"
  },
  {
    "title": "CSS: display property",
    "date": "Jul 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/css-display-property-4pmh"
  },

  {
    title: 'Visual Studio Code shortcut',
    date: 'Jan 2022',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/visual-studio-code-shortcut/'
  },
  {
    title: 'Libri 2021',
    date: 'Mar 2021',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/libri-2021/'
  },
  {
    title: 'Deep link ed Universal link',
    date: 'Jun 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/deep-link-ed-universal-link/'
  },
  {
    title: 'Funzioni hash',
    date: 'Jun 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/funzioni-hash/'
  },
  {
    title: 'Cifratura a chiave asimmetrica',
    date: 'Jun 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/cifratura-a-chiave-asimmetrica/'
  },
  {
    title: 'Cifratura a chiave simmetrica',
    date: 'Jun 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/cifratura-a-chiave-simmetrica/'
  },
  {
    title: 'La sicurezza informatica su internet',
    date: 'Jun 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/la-sicurezza-informatica-su-interne/'
  },
  {
    title: 'Immuni pubblicato su GitHub',
    date: 'May 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/immuni-pubblicato-su-github/'
  },
  {
    title: 'Su GitHub il codice sorgente di Immuni.',
    date: 'May 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/su-github-il-codice-sorgente-di-immuni/'
  },
  {
    title: 'Implementare un&#8217;applicazione client/server con protocollo UDP in Java',
    date: 'May 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/implementare-applicazione-client-server-con-protocollo-udp-in-java/'
  },
  {
    title: 'Cos’è Immuni per la Fase 2',
    date: 'Apr 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/cose-immuni-per-la-fase-2/'
  },
  {
    title: 'Sm-Covid-19, concorrente di Immuni',
    date: 'Apr 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/391-2/'
  },
  {
    title: 'Gesture mobile in Angular 9',
    date: 'Mar 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/gesture-mobile-in-angular-9/'
  },
  {
    title: 'Libri 2020',
    date: 'Feb 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/libri-2020/'
  },
  {
    title: 'Web Inspector per Android Emulator',
    date: 'Feb 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/web-inspector-per-android-emulator/'
  },
  {
    title: 'Come ricevere push notification in app Android',
    date: 'Jan 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/come-ricevere-push-notification-in-app-android/'
  },
  {
    title: 'Cordova Xcode build failed “Permission denied”',
    date: 'Jan 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/cordova-xcode-build-failed-permission-denied/'
  },
  {
    title: 'Push notification su Cordova',
    date: 'Jan 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/push-notification-su-cordova/'
  },
  {
    title: 'Configurare progetto Cordova per inviare notifiche push via FMC a iOs',
    date: 'Jan 2020',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/configurare-progetto-cordova-per-inviare-notifiche-push-via-fmc-a-ios/'
  },
  {
    title: 'Xcode e l&#8217;eterna lotta coi certificati Apple',
    date: 'Dec 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/xcode-e-leterna-lotta-coi-certificati-apple/'
  },
  {
    title: 'Generatore di anagrafiche fake',
    date: 'Dec 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/generatore-di-anagrafiche-fake/'
  },
  {
    title: 'WebService in PHP? Sì, è possibile!',
    date: 'Dec 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/webservice-in-php-si-e-possibile/'
  },
  {
    title: 'MAMP su Windows 10',
    date: 'Dec 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/mamp-su-windows-10/'
  },
  {
    title: 'Crea zip di file da JS',
    date: 'Dec 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/crea-zip-di-file-da-js/'
  },
  {
    title: 'Download array di byte',
    date: 'Dec 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/download-array-di-byte/'
  },
  {
    title: 'Plugin per uno sviluppo comodo con Visual Studio Code',
    date: 'Dec 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/plugin-per-uno-sviluppo-comodo-con-visual-studio-code/'
  },
  {
    title: 'MS Access 2013: non si vedono le maschere',
    date: 'Nov 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/ms-access-2013-non-si-vedono-le-maschere/'
  },
  {
    title: 'Proprietà CSS personalizzate per Internet Explorer',
    date: 'Nov 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/proprieta-css-personalizzate-per-internet-explorer/'
  },
  {
    title: 'Libri 2019',
    date: 'Nov 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/libri-2019/'
  },
  {
    title: '3, 2, 1&#8230; Kotlin! How to',
    date: 'Jul 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/kotlin-how-to/'
  },
  {
    title: 'Web Inspector per iOS Simulator',
    date: 'Jul 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/web-inspector-per-ios-simulator/'
  },
  {
    title: 'Material Icon: come renderle slim',
    date: 'Jul 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/come-rendere-le-material-icon-slim/'
  },
  {
    title: 'Di &#8220;TIC SSL Trust Error&#8221; e altri subdoli errori',
    date: 'Jul 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/di-tic-ssl-trust-error-e-altri-subdoli-errori/'
  },
  {
    title: 'Creare una web application con Angular7',
    date: 'Jun 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/creare-una-web-application-con-angular7/'
  },
  {
    title: 'Cit.',
    date: 'Jun 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/169/'
  },
  {
    title: 'Load image into DB',
    date: 'May 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/load-image-into-db/'
  },
  {
    title: 'Ciao mondo! Reboot',
    date: 'Mar 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/ciao-mondo/'
  },
  {
    title: 'Xcode',
    date: 'Mar 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/xcode/'
  },
  {
    title: 'Pie chart',
    date: 'Mar 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/pie-chart/'
  },
  {
    title: 'Lazy loading',
    date: 'Mar 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/lazy-loading/'
  },
  {
    title: 'Dependency Injection e Inversion of Control',
    date: 'Mar 2019',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/dependency-injection-e-inversion-of-control/'
  },
  {
    title: 'Persistenza dati in sessione in app',
    date: 'Sep 2018',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/persistenza-dati-in-sessione-in-app/'
  },
  {
    title: 'Autenticazione app NodeJs',
    date: 'Sep 2018',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/autenticazione-app-nodejs/'
  },
  {
    title: 'Struttura base app NodeJs',
    date: 'Sep 2018',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/struttura-base-app-nodejs/'
  },
  {
    title: 'Struttura base app AngularJS',
    date: 'Sep 2018',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/struttura-base-app-angularjs/'
  },
  {
    title: 'ORM: Object Relational Mapping',
    date: 'Jul 2018',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/orm-object-relational-mapping/'
  },
  {
    title: 'La disperazione di Android (e iOs, ma meno) con protoccolli https, Basic Authentication e certificati autogenerati.',
    date: 'May 2018',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/la-disperazione-di-android-e-ios-ma-meno-con-protoccolli-https-basic-authentication-e-certificati-autogenerati/'
  },
  {
    title: 'Maven: cos&#8217;è e come si installa',
    date: 'Jan 2018',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/maven-cose-e-come-si-installa/'
  },
  {
    title: 'Cambiare il nome del package di un&#8217;app android',
    date: 'Nov 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/cambiare-il-nome-del-package-di-unapp-android/'
  },
  {
    title: 'Cambiare il repository remoto di git',
    date: 'Nov 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/cambiare-il-repository-remoto-di-git/'
  },
  {
    title: 'Git Overwrite del master con un branch',
    date: 'Nov 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/git-overwrite-del-master-con-un-branch/'
  },
  {
    title: 'Stored procedure: ricerca utilizzo tabelle o campi',
    date: 'Oct 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/stored-procedure-ricerca-utilizzo-tabelle-o-campi/'
  },
  {
    title: 'Per arrotondare NSDecimalNumber',
    date: 'Oct 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/per-arrotondare-nsdecimalnumber/'
  },
  {
    title: 'Formattare numero in stringa con gli zeri',
    date: 'Oct 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/formattare-numero-in-stringa-con-gli-zeri/'
  },
  {
    title: 'MSSQL: Cambiare tutti i Sinonimi con una query',
    date: 'Oct 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/mssql-cambiare-tutti-i-sinonimi-con-una-query/'
  },
  {
    title: 'Scroll della ScrollView quando si apre la tastiera, e chiusura.',
    date: 'Sep 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/scroll-della-scrollview-quando-si-apre-la-tastiera-e-chiusura/'
  },
  {
    title: 'iOs 11 &#8211; note di release per le app',
    date: 'Sep 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/ios-11-note-di-release-per-le-app/'
  },
  {
    title: 'Come distribuire un app con Apple Developer Enterprise Program',
    date: 'Sep 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/come-distribuire-un-app-con-apple-developer-enterprise-program/'
  },
  {
    title: 'Xcode 9 GM: primo incontro e subito panico&#8230; poi ok :P',
    date: 'Sep 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/xcode-9-gm-primo-incontro-e-subito-panico-poi-ok-p/'
  },
  {
    title: 'Autodraw: disegna con l&#8217;intelligenza artificiale',
    date: 'Apr 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/autodraw-disegna-con-lintelligenza-artificiale/'
  },
  {
    title: 'Laravel: routes',
    date: 'Mar 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/laravel-routes/'
  },
  {
    title: 'TouchID: autenticazione manuale o tramite form?',
    date: 'Feb 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/touchid-autenticazione-manuale-o-tramite-form/'
  },
  {
    title: 'Imparare una lingua',
    date: 'Feb 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/imparare-una-lingua/'
  },
  {
    title: 'Modificare il colore di highlight di un UIButton',
    date: 'Jan 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/modificare-il-colore-di-highlight-di-un-uibutton/'
  },
  {
    title: 'Colorare le celle con un colore personalizzato',
    date: 'Jan 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/colorare-le-celle-con-un-colore-personalizzato/'
  },
  {
    title: 'Stampa PDF da template (PDF)',
    date: 'Jan 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/stampa-pdf-da-template-pdf/'
  },
  {
    title: 'Laravel: come si parte?',
    date: 'Jan 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/lavarel-come-si-parte/'
  },
  {
    title: 'Errori nell&#8217;importazione dei dati in un database SQLite',
    date: 'Jan 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/errori-nellimportazione-dei-dati-in-un-database-sqlite/'
  },
  {
    title: 'SQLite e diagrammi',
    date: 'Jan 2017',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/sqlite-e-diagrammi/'
  },
  {
    title: 'Appunti sulla firma grafometrica',
    date: 'Dec 2016',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/appunti-sulla-firma-grafometrica/'
  },
  {
    title: 'Formattazione importi o altri numeri con la virgola',
    date: 'Dec 2016',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/formattazione-importi-o-altri-numeri-con-la-virgola/'
  },
  {
    title: 'Hello world',
    date: 'Dec 2016',
    type: 'article',
    link: 'https://www.eleonorarocchi.it/primo-articolo-del-blog/'
  }

];

type FilterType = InitiativeType | 'all';

const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'Tutti' },
    { key: 'article', label: 'Articoli' },
    { key: 'talk', label: 'Talk' },
    { key: 'video', label: 'Video' },
];

const Initiatives: FC = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');

    const visible = activeFilter === 'all'
        ? initiatives
        : initiatives.filter(i => i.type === activeFilter);

    return (
        <div className="home scrollable">
            <Header />
            <section className="container-fluid main-container p-0">
                <div className="row home-details-container">
                    <div className="col-lg-4 bg position-fixed d-none d-lg-block"></div>
                    <div className="col-12 col-lg-8 offset-lg-4 main-content">
                        <div className="initiatives-wrapper">
                            <h3 className="text-uppercase poppins-font initiatives-title pb-3">
                                Le mie <span>Iniziative</span>
                            </h3>
                            <div className="initiatives-filters">
                                {filters.map(f => (
                                    <button
                                        key={f.key}
                                        className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
                                        onClick={() => setActiveFilter(f.key)}
                                    >
                                        {f.label}
                                    </button>
                                ))}
                            </div>
                            {visible.length === 0 ? (
                                <p className="open-sans-font initiatives-empty">Nessuna iniziativa in questa categoria.</p>
                            ) : (
                                visible.map((item, index) => (
                                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="initiative-item">
                                        <div className="initiative-icon">
                                            <i className={`fa ${typeIcon[item.type]}`}></i>
                                        </div>
                                        <div className="initiative-details">
                                            <span className="initiative-type">{typeLabel[item.type]}</span>
                                            <h5 className="initiative-title poppins-font">{item.title}</h5>
                                            <span className="initiative-date open-sans-font">{item.date}</span>
                                        </div>
                                    </a>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Initiatives;
