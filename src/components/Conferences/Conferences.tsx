import React, { FC } from 'react';
import Header from '../Header/Header';
import './Conferences.css';

interface Conference {
    title: string;
    date: string;
}

const conferences: Conference[] = [
    {
        title: 'AIConf by Improove',
        date: '2026',
    },
    {
        title: 'Azure Day Roma by DotNetCode',
        date: '2026',
    },
    {
        title: 'GitHub Copilot Dev Days Verona',
        date: '2026',
    },
    {
        title: 'A.I. Day Roma',
        date: '2026',
    },
    {
        title: 'Codegen Verona',
        date: '2026',
    },
    {
        title: 'UseCaseConf - conferenza indipendente',
        date: '2025',
    },
    {
        title: 'AIConf by Improove',
        date: '2025',
    },
    {
        title: 'Product Heroes Squad Verona',
        date: '2025',
    },
    {
        title: 'AIConf by Improove',
        date: '2024',
    },
    {
        title: 'ContainerDay by Grusp',
        date: '2023',
    },
    {
        title: 'DevSecOpsDay by Grusp',
        date: '2023',
    },
    {
        title: 'JsDay by Grusp',
        date: '2023',
    },
    {
        title: 'AngularDay by Grusp',
        date: '2023',
    },
    {
        title: 'Meetup Front-end development: presente e futuro by FEVR',
        date: '2023',
    },
    {
        title: 'AngularDay by Grusp',
        date: '2022',
    },
    {
        title: 'Sviluppo Web Accessibile by Accessibility Days',
        date: '2022',
    },
    {
        title: 'Come si realizza una piattaforma digitale accessibile? by Accessibility Days',
        date: '2022',
    },
    {
        title: 'CloudDay by Improove',
        date: '2021',
    },
    {
        title: 'Tour inside GraphQL by FEVR',
        date: '2018',
    },
    {
        title: 'Component-driven Web Theming by FEVR',
        date: '2018',
    },
    {
        title: 'Blockchain loves Javascript by FEVR',
        date: '2018',
    },
    {
        title: 'Introduction to CSS Grids by FEVR',
        date: '2018',
    },
    {
        title: 'WordCamp Milano by Wordpress Community',
        date: '2017',
    },
    {
        title: 'WordCamp Milano by Wordpress Community',
        date: '2016',
    },
    {
        title: 'Web European Conference',
        date: '2015',
    },
];

const Conferences: FC = () => (
    <div className="home scrollable">
        <Header />
        <section className="container-fluid main-container p-0">
            <div className="row home-details-container">
                <div className="color-block d-none d-lg-block"></div>
                <div className="col-lg-4 bg position-fixed d-none d-lg-block"></div>
                <div className="col-12 col-lg-8 offset-lg-4 main-content">
                    <div className="conferences-wrapper">
                        <h3 className="text-uppercase poppins-font initiatives-title pb-3">
                            Le mie <span>Conferenze</span> preferite
                        </h3>
                        <div className="conference-list">
                            {conferences.map((item, index) => (
                                <div key={index} className="conference-item">
                                    <div className="conference-title">{item.title}</div>
                                    <div className="conference-meta">
                                        <span><i className="fa fa-calendar"></i>{item.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Conferences;
