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
    "title": "Getting Started with the Gemini API: A Practical Guide",
    "date": "Apr 2026",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/getting-started-with-the-gemini-api-a-practical-guide"
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
    "link": "https://dev.to/eleonorarocchi/different-types-of-mobile-app"
  },
  {
    "title": "AI: how to include AI in software projects",
    "date": "Jun 2023",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/ai-how-to-include-ai-in-software-projects"
  },
  {
    "title": "AI: what else is in AI besides machine learning",
    "date": "Jun 2023",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/ai-what-else-is-in-ai-besides-machine-learning"
  },
  {
    "title": "AI: what is Machine Learning",
    "date": "Jun 2023",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/ai-what-is-machine-learning"
  },
  {
    "title": "How to start with OramaSearch",
    "date": "Jun 2023",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/how-to-start-with-oramasearch"
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
    "link": "https://dev.to/eleonorarocchi/where-publish-nodejs-angular-app-for-free"
  },
  {
    "title": "No code mobile app? BravoStudio is the answer",
    "date": "Dec 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/no-code-mobile-app-bravostudio-is-the-answer"
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
    "link": "https://dev.to/eleonorarocchi/lit-what-is-public-reactive-properties"
  },
  {
    "title": "Blackboards, for all tastes and budgets",
    "date": "Aug 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/blackboards-for-all-tastes-and-budgets"
  },
  {
    "title": "Lit: how can a lit component be defined",
    "date": "Aug 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/lit-how-can-a-lit-component-be-defined"
  },
  {
    "title": "UI: some useful resources",
    "date": "Aug 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/ui-some-useful-resources"
  },
  {
    "title": "Lit: how to use it",
    "date": "Aug 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/lit-how-to-use-it"
  },
  {
    "title": "Bootstrap 5: grid system",
    "date": "Aug 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/bootstrap-5-grid-system"
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
    "link": "https://dev.to/eleonorarocchi/what-is-lit-component"
  },
  {
    "title": "CSS: display property",
    "date": "Jul 2022",
    "type": "article",
    "link": "https://dev.to/eleonorarocchi/css-display-property"
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
