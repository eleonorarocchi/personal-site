import React, { FC } from 'react';
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
                <div className="col-lg-4 bg position-fixed d-none d-lg-block"></div>
                <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
                    <div>
                        <img src={imgMobile} className="img-fluid main-img-mobile d-block d-sm-block d-lg-none" alt="Eleonora Rocchi" />
                        <h6 className="text-uppercase open-sans-font mb-0 d-block d-sm-none d-lg-block">Ciao!</h6>
                        <h1 className="text-uppercase poppins-font"><span>Sono</span> Eleonora</h1>
                        <h6 className="open-sans-font role-title">CTO @ P-LAB S.R.L.</h6>
                        <p className="open-sans-font">Appassionata di software e tecnologia: oggi progetto e guido soluzioni con l&apos;obiettivo di migliorare concretamente la vita di chi mi circonda.</p>
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
    </div>
);

export default Home;
