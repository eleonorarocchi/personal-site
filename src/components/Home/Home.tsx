import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import imgMobile from '../../assets/img/img-mobile.jpg';
import Header from '../Header/Header.tsx';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
    <div className="home">
        <Header />
        <section className="container-fluid main-container container-home p-0">
            <div className="color-block d-none d-lg-block"></div>
            <div className="row home-details-container align-items-center">
                <div className="col-lg-4 bg position-absolute d-none d-lg-block"></div>
                <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
                    <div>
                        <img src={imgMobile} className="img-fluid main-img-mobile d-block d-sm-block d-lg-none" alt="Eleonora Rocchi" />
                        <h6 className="text-uppercase open-sans-font mb-0 d-block d-sm-none d-lg-block">Ciao!</h6>
                        <h1 className="text-uppercase poppins-font"><span>Sono</span> Eleonora</h1>
                        <h6 className="open-sans-font role-title">CTO @ P-LAB S.R.L.</h6>
                        <p className="open-sans-font">
                            Da quasi vent'anni progetto e sviluppo software, costruisco prodotti digitali e guido team tecnici.
                        </p>
                        <p className="open-sans-font">
                            In questo spazio raccolgo ciò che sto studiando e sperimentando, 
                            con un focus crescente su Agent Engineering, AI Evaluation, harness per sistemi AI e architetture basate su LLM.
                        </p>
                        <div className="home-ctas mt-3">
                            <Link to="/iniziative" className="btn btn-primary mr-3" title="Leggi gli articoli">Leggi gli articoli</Link>
                            <a href="https://dev.to/eleonorarocchi/harness-engineering-la-parte-piu-importante-degli-agenti-ai-4jnd" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">Esplora la serie sull'Harness Engineering</a>
                        </div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/eleonora-rocchi/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a href="https://dev.to/eleonorarocchi" target="_blank" rel="noopener noreferrer" title="dev.to">
                                <span className="devto-icon">DEV</span>
                            </a>
                            <a href="https://x.com/eleonora_rocchi" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container research-section mt-5" style={{display: 'none'} }>
            <div className="row">
                <div className="col-12">
                    <h2 className="section-title text-center">IL MIO SPAZIO DI RICERCA</h2>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12 col-md-4 research-column">
                    <h3>Agent Engineering</h3>
                    <p>Ricerco pratiche, design pattern e harness per costruire agenti affidabili e manutenibili.</p>
                </div>
                <div className="col-12 col-md-4 research-column">
                    <h3>AI Evaluation</h3>
                    <p>Sviluppo approcci di valutazione qualitativa e quantitativa per modelli e sistemi AI.</p>
                </div>
                <div className="col-12 col-md-4 research-column">
                    <h3>Software Architecture</h3>
                    <p>Progetto architetture scalabili e sicure per integrare LLM e componenti AI in prodotto.</p>
                </div>
            </div>
        </section>
    </div>
);

export default Home;
