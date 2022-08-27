import React, { FC } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Home.css'
import imgMobile from '../../assets/img/img-mobile.jpg'

interface HomeProps {}

const Home: FC<HomeProps> = () => (
    <Router>
        <div className="home">
            <header className="header">
                <ul className="icon-menu d-none d-lg-block">
                    <li className="icon-box active">
                        <i className="fa fa-home"></i>
                        <Link to="/"><h2>Home</h2></Link>
                    </li>
                </ul>
                <nav role="navigation" className="d-block d-lg-none">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul className="list-unstyled" id="menu">
                            <li className="active"><a href="index.html"><i className="fa fa-home"></i><span>Home</span></a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <section
                className="container-fluid main-container container-home p-0">
                <div className="color-block d-none d-lg-block"></div>
                <div className="row home-details-container align-items-center">
                    <div className="col-lg-4 bg position-fixed d-none d-lg-block"></div>
                    <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
                        <div>
                            <img src={imgMobile} className="img-fluid main-img-mobile d-block d-sm-block d-lg-none"/>
                            <h6 className="text-uppercase open-sans-font mb-0 d-block d-sm-none d-lg-block">Ciao !</h6>
                            <h1 className="text-uppercase poppins-font"><span>Sono</span> Eleonora</h1>
                            <p className="open-sans-font">Mi occupo di sviluppo web e mobile, sono appassionata di software:
                                il mio scopo &egrave; creare qualcosa che migliori la vita di chi mi circonda.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Router>
);

export default Home;
