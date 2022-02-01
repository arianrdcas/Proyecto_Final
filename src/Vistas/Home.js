import React from "react";


const Home  = () => {
    return (
        <>
            {/* header-slider-area start */}
            <section className="header-slider-area">
                <div
                id="carousel-example-generic"
                className="carousel slide carousel-fade"
                data-ride="carousel"
                >
                {/* Indicators */}
                <ol className="carousel-indicators">
                    <li
                    data-target="#carousel-example-generic"
                    data-slide-to={0}
                    className="active"
                    />
                    <li data-target="#carousel-example-generic" data-slide-to={1} />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                    <div className="single-slide-item slide-1">
                        <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                            <div className="single-slide-item-content">
                                <h2>
                                Consult Your <br /> Business With Us
                                </h2>
                                <p>
                                We are the unique Consultancy Farm for your business
                                solution, That is ready to take challenge and knockout
                                your business problems.
                                </p>
                                <button type="button" className="slide-btn">
                                get started
                                </button>
                                <button type="button" className="slide-btn">
                                explore more
                                </button>
                            </div>
                            {/* /.single-slide-item-content*/}
                            </div>
                            {/* /.col*/}
                        </div>
                        {/* /.row*/}
                        </div>
                        {/* /.container*/}
                    </div>
                    {/* /.single-slide-item*/}
                    </div>
                    {/* /.item .active*/}
                    <div className="item">
                    <div className="single-slide-item slide-2">
                        <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                            <div className="single-slide-item-content">
                                <h2>
                                Consult Your <br /> Business
                                </h2>
                                <p>
                                We are the unique Consultancy Farm for your business
                                solution, That is ready to take challenge and knockout
                                your business problems.
                                </p>
                                <button type="button" className="slide-btn">
                                get started
                                </button>
                                <button
                                type="button"
                                className="slide-btn
                                                        "
                                >
                                explore more
                                </button>
                            </div>
                            {/* /.single-slide-item-content*/}
                            </div>
                            {/* /.col*/}
                        </div>
                        {/* /.row*/}
                        </div>
                        {/* /.container*/}
                    </div>
                    {/* /.single-slide-item*/}
                    </div>
                    {/* /.item .active*/}
                </div>
                {/* /.carousel-inner*/}
                {/* Controls */}
                <a
                    className="left carousel-control"
                    href="#carousel-example-generic"
                    role="button"
                    data-slide="prev"
                >
                    <span className="lnr lnr-chevron-left" />
                </a>
                <a
                    className="right carousel-control"
                    href="#carousel-example-generic"
                    role="button"
                    data-slide="next"
                >
                    <span className="lnr lnr-chevron-right" />
                </a>
                </div>
                {/* /.carousel*/}
            </section>
            {/* /.header-slider-area*/}
            {/* header-slider-area end */}
            {/*we-do start */}
            <section className="we-do">
                <div className="container">
                <div className="we-do-details">
                    <div className="section-header text-center">
                    <h2>what we do</h2>
                    <p>
                        Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                    </p>
                    </div>
                    {/*/.section-header*/}
                    <div className="we-do-carousel">
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                        <div className="single-we-do-box text-center">
                            <div className="we-do-description">
                            <div className="we-do-info">
                                <div className="we-do-img">
                                <img
                                    src="assets/images/home/consultency.png"
                                    alt="image of consultency"
                                />
                                </div>
                                {/*/.we-do-img*/}
                                <div className="we-do-topics">
                                <h2>
                                    <a href="#">Business Consultancy</a>
                                </h2>
                                </div>
                                {/*/.we-do-topics*/}
                            </div>
                            {/*/.we-do-info*/}
                            <div className="we-do-comment">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ul.
                                </p>
                            </div>
                            {/*/.we-do-comment*/}
                            </div>
                            {/*/.we-do-description*/}
                        </div>
                        {/*/.single-we-do-box*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-sm-4 col-xs-12">
                        <div className="single-we-do-box text-center">
                            <div className="we-do-description">
                            <div className="we-do-info">
                                <div className="we-do-img">
                                <img
                                    src="assets/images/home/busisness_grow.png"
                                    alt="image of business"
                                />
                                </div>
                                {/*/.we-do-img*/}
                                <div className="we-do-topics">
                                <h2>
                                    <a href="#">help to grow Business</a>
                                </h2>
                                </div>
                                {/*/.we-do-topics*/}
                            </div>
                            {/*/.we-do-info*/}
                            <div className="we-do-comment">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ul.
                                </p>
                            </div>
                            {/*/.we-do-comment*/}
                            </div>
                            {/*/.we-do-description*/}
                        </div>
                        {/*/.single-we-do-box*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-sm-4 col-xs-12">
                        <div className="single-we-do-box text-center">
                            <div className="we-do-description">
                            <div className="we-do-info">
                                <div className="we-do-img">
                                <img
                                    src="assets/images/home/support-logo.png"
                                    alt="image of support"
                                />
                                </div>
                                {/*/.we-do-img*/}
                                <div className="we-do-topics">
                                <h2>
                                    <a href="#">great support</a>
                                </h2>
                                </div>
                                {/*/.we-do-topics*/}
                            </div>
                            {/*/.we-do-info*/}
                            <div className="we-do-comment">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ul.
                                </p>
                            </div>
                            {/*/.we-do-comment*/}
                            </div>
                            {/*/.we-do-description*/}
                        </div>
                        {/*/.single-we-do-box*/}
                        </div>
                        {/*/.col*/}
                    </div>
                    {/*/.row*/}
                    </div>
                    {/*/.we-do-carousel*/}
                </div>
                {/*/.we-do-details*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/.we-do*/}
            {/*we-do end*/}
            {/*about-us start */}
            <section className="about-us">
                <div className="container">
                <div className="about-us-content">
                    <div className="row">
                    <div className="col-sm-6">
                        <div className="single-about-us">
                        <div className="about-us-txt">
                            <h2>about us</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse.
                            </p>
                            <div className="project-btn">
                            <a href="#" className="project-view">
                                learn more
                            </a>
                            </div>
                            {/*/.project-btn*/}
                        </div>
                        {/*/.about-us-txt*/}
                        </div>
                        {/*/.single-about-us*/}
                    </div>
                    {/*/.col*/}
                    <div className="col-sm-6">
                        <div className="single-about-us">
                        <div className="about-us-img">
                            <img
                            src="assets/images/about/about-part.jpg"
                            alt="about images"
                            />
                        </div>
                        {/*/.about-us-img*/}
                        </div>
                        {/*/.single-about-us*/}
                    </div>
                    {/*/.col*/}
                    </div>
                    {/*/.row*/}
                </div>
                {/*/.about-us-content*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/.about-us*/}
            {/*about-us end */}
            {/*service start*/}
            <section className="service">
                <div className="container">
                <div className="service-details">
                    <div className="section-header text-center">
                    <h2>our services</h2>
                    <p>
                        Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                    </p>
                    </div>
                    {/*/.section-header*/}
                    <div className="service-content-one">
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                        <div className="service-single text-center">
                            <div className="service-img">
                            <img
                                src="assets/images/service/service1.png"
                                alt="image of service"
                            />
                            </div>
                            {/*/.service-img*/}
                            <div className="service-txt">
                            <h2>
                                <a href="#">busisness planning</a>
                            </h2>
                            <p>
                                Lorem ipsum dolo dolor in in voluptate velit esse cillum
                                dolore. epteur sint oat cupidatat
                            </p>
                            <a href="#" className="service-btn">
                                learn more
                            </a>
                            </div>
                            {/*/.service-txt*/}
                        </div>
                        {/*/.service-single*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-sm-4 col-xs-12">
                        <div className="service-single text-center">
                            <div className="service-img">
                            <img
                                src="assets/images/service/service2.png"
                                alt="image of service"
                            />
                            </div>
                            {/*/.service-img*/}
                            <div className="service-txt">
                            <h2>
                                <a href="#">busisness consultency</a>
                            </h2>
                            <p>
                                Lorem ipsum dolo dolor in in voluptate velit esse cillum
                                dolore. epteur sint oat cupidatat
                            </p>
                            <a href="#" className="service-btn">
                                learn more
                            </a>
                            </div>
                            {/*/.service-txt*/}
                        </div>
                        {/*/.service-single*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-sm-4 col-xs-12">
                        <div className="service-single text-center">
                            <div className="service-img">
                            <img
                                src="assets/images/service/service3.png"
                                alt="image of service"
                            />
                            </div>
                            {/*/.service-img*/}
                            <div className="service-txt">
                            <h2>
                                <a href="#">financial services</a>
                            </h2>
                            <p>
                                Lorem ipsum dolo dolor in in voluptate velit esse cillum
                                dolore. epteur sint oat cupidatat
                            </p>
                            <a href="#" className="service-btn">
                                learn more
                            </a>
                            </div>
                            {/*/.service-txt*/}
                        </div>
                        {/*/.service-single*/}
                        </div>
                        {/*/.col*/}
                    </div>
                    {/*/.row*/}
                    </div>
                    {/*/.service-content-one*/}
                    <div className="service-content-two">
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                        <div className="service-single text-center">
                            <div className="service-img">
                            <img
                                src="assets/images/service/service4.png"
                                alt="image of service"
                            />
                            </div>
                            {/*/.service-img*/}
                            <div className="service-txt">
                            <h2>
                                <a href="#">risk management</a>
                            </h2>
                            <p>
                                Lorem ipsum dolo dolor in in voluptate velit esse cillum
                                dolore. epteur sint oat cupidatat
                            </p>
                            <a href="#" className="service-btn">
                                learn more
                            </a>
                            </div>
                            {/*/.service-txt*/}
                        </div>
                        {/*/.service-single*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-sm-4 col-xs-12">
                        <div className="service-single text-center">
                            <div className="service-img">
                            <img
                                src="assets/images/service/service5.png"
                                alt="image of service"
                            />
                            </div>
                            {/*/.service-img*/}
                            <div className="service-txt">
                            <h2>
                                <a href="#">expert advisers</a>
                            </h2>
                            <p>
                                Lorem ipsum dolo dolor in in voluptate velit esse cillum
                                dolore. epteur sint oat cupidatat
                            </p>
                            <a href="#" className="service-btn">
                                learn more
                            </a>
                            </div>
                            {/*/.service-txt*/}
                        </div>
                        {/*/.service-single*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-sm-4 col-xs-12">
                        <div className="service-single text-center">
                            <div className="service-img">
                            <img
                                src="assets/images/service/service6.png"
                                alt="image of service"
                            />
                            </div>
                            {/*/.service-img*/}
                            <div className="service-txt">
                            <h2>
                                <a href="#">24/7 customer support</a>
                            </h2>
                            <p>
                                Lorem ipsum dolo dolor in in voluptate velit esse cillum
                                dolore. epteur sint oat cupidatat
                            </p>
                            <a href="#" className="service-btn">
                                learn more
                            </a>
                            </div>
                            {/*/.service-txt*/}
                        </div>
                        {/*/.service-single*/}
                        </div>
                        {/*/.col*/}
                    </div>
                    {/*/.row*/}
                    </div>
                    {/*/.service-content-two*/}
                </div>
                {/*/.service-details*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/.service*/}
            {/*service end*/}
            {/*statistics start*/}
            <section className="statistics">
                <div className="container">
                <div className="statistics-counter ">
                    <div className="col-md-3 col-sm-6">
                    <div className="single-ststistics-box">
                        <div className="statistics-img">
                        <img
                            src="assets/images/counter/counter1.png"
                            alt="counter-icon"
                        />
                        </div>
                        {/*/.statistics-img*/}
                        <div className="statistics-content">
                        <div className="counter">2556</div>
                        <h3>days worked</h3>
                        </div>
                        {/*/.statistics-content*/}
                    </div>
                    {/*/.single-ststistics-box*/}
                    </div>
                    {/*/.col*/}
                    <div className="col-md-3 col-sm-6">
                    <div className="single-ststistics-box">
                        <div className="statistics-img">
                        <img
                            src="assets/images/counter/counter2.png"
                            alt="counter-icon"
                        />
                        </div>
                        {/*/.statistics-img*/}
                        <div className="statistics-content">
                        <div className="counter">326</div>
                        <h3>project finished</h3>
                        </div>
                        {/*/.statistics-content*/}
                    </div>
                    {/*/.single-ststistics-box*/}
                    </div>
                    {/*/.col*/}
                    <div className="col-md-3 col-sm-6">
                    <div className="single-ststistics-box">
                        <div className="statistics-img">
                        <img
                            src="assets/images/counter/counter3.png"
                            alt="counter-icon"
                        />
                        </div>
                        {/*/.statistics-img*/}
                        <div className="statistics-content">
                        <div className="counter">1526</div>
                        <h3>coffee cup</h3>
                        </div>
                        {/*/.statistics-content*/}
                    </div>
                    {/*/.single-ststistics-box*/}
                    </div>
                    {/*/.col*/}
                    <div className="col-md-3 col-sm-6">
                    <div className="single-ststistics-box">
                        <div className="statistics-img">
                        <img
                            src="assets/images/counter/counter4.png"
                            alt="counter-icon"
                        />
                        </div>
                        {/*/.statistics-img*/}
                        <div className="statistics-content">
                        <div className="counter">856</div>
                        <h3>client satisfied</h3>
                        </div>
                        {/*/.statistics-content*/}
                    </div>
                    {/*/.single-ststistics-box*/}
                    </div>
                    {/*/.col*/}
                </div>
                {/*/.statistics-counter*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/.statistics*/}
            {/*statistics end*/}
            {/*project start*/}
            <section id="project" className="project">
                <div className="container">
                <div className="project-details">
                    <div className="project-header text-left">
                    <h2>Our Finished Projects</h2>
                    <p>Pallamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    {/*/.project-header*/}
                    <div className="project-content">
                    <div className="gallery-content">
                        <div className="isotope">
                        <div className="row">
                            <div className=" col-md-4 col-sm-12">
                            <div className="item big-height">
                                <img
                                src="assets/images/project/project1.jpg"
                                alt="portfolio image"
                                />
                                <div className="isotope-overlay">
                                <a href="project.html">
                                    <span className="lnr lnr-link" />
                                </a>
                                <h3>
                                    <a href="project.html">aquisition plan</a>
                                </h3>
                                <p>busisness planning</p>
                                </div>
                                {/* /.isotope-overlay */}
                            </div>
                            {/* /.item */}
                            </div>
                            {/* /.col */}
                            <div className="col-md-8 col-sm-12">
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                <div className="item">
                                    <img
                                    src="assets/images/project/project2.jpg"
                                    alt="portfolio image"
                                    />
                                    <div className="isotope-overlay">
                                    <a href="project.html">
                                        <span className="lnr lnr-link" />
                                    </a>
                                    <h3>
                                        <a href="project.html">aquisition plan</a>
                                    </h3>
                                    <p>busisness planning</p>
                                    </div>
                                    {/* /.isotope-overlay */}
                                </div>
                                {/* /.item */}
                                </div>
                                {/* /.col */}
                                <div className="col-sm-6 col-xs-12">
                                <div className="item">
                                    <img
                                    src="assets/images/project/project3.jpg"
                                    alt="portfolio image"
                                    />
                                    <div className="isotope-overlay">
                                    <a href="project.html">
                                        <span className="lnr lnr-link" />
                                    </a>
                                    <h3>
                                        <a href="project.html">aquisition plan</a>
                                    </h3>
                                    <p>busisness planning</p>
                                    </div>
                                    {/* /.isotope-overlay */}
                                </div>
                                {/* /.item */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row*/}
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                <div className="item">
                                    <img
                                    src="assets/images/project/project4.jpg"
                                    alt="portfolio image"
                                    />
                                    <div className="isotope-overlay">
                                    <a href="project.html">
                                        <span className="lnr lnr-link" />
                                    </a>
                                    <h3>
                                        <a href="project.html">aquisition plan</a>
                                    </h3>
                                    <p>busisness planning</p>
                                    </div>
                                    {/* /.isotope-overlay */}
                                </div>
                                {/* /.item */}
                                </div>
                                {/* /.col */}
                                <div className="col-sm-6 col-xs-12">
                                <div className="item">
                                    <img
                                    src="assets/images/project/project5.jpg"
                                    alt="portfolio image"
                                    />
                                    <div className="isotope-overlay">
                                    <a href="project.html">
                                        <span className="lnr lnr-link" />
                                    </a>
                                    <h3>
                                        <a href="project.html">aquisition plan</a>
                                    </h3>
                                    <p>busisness planning</p>
                                    </div>
                                    {/* /.isotope-overlay */}
                                </div>
                                {/*/.item */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row*/}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                        </div>
                        {/*/.isotope*/}
                    </div>
                    {/*/.gallery-content*/}
                    </div>
                    {/*/.project-content*/}
                </div>
                {/*/.project-details*/}
                <div className="project-btn text-center">
                    <a href="project.html" className="project-view">
                    view all
                    </a>
                </div>
                {/*/.project-btn*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/.project*/}
            {/*project end*/}
            {/*team start */}
            <section className="team">
                <div className="container">
                <div className="team-details">
                    <div className="project-header team-header text-left">
                    <h2>Our expert team</h2>
                    <p>Pallamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    {/*/.project-header*/}
                    <div className="team-card">
                    <div className="container">
                        <div className="row">
                        <div className="owl-carousel  team-carousel">
                            <div className="col-sm-3 col-xs-12">
                            <div className="single-team-box team-box-bg-1">
                                <div className="team-box-inner">
                                <h3>tom hanks</h3>
                                <p className="team-meta">Founder &amp; CEO</p>
                                <a href="team.html" className="learn-btn">
                                    learn more
                                </a>
                                </div>
                                {/*/.team-box-inner*/}
                            </div>
                            {/*/.single-team-box*/}
                            </div>
                            {/*.col*/}
                            <div className="col-sm-3 col-xs-12">
                            <div className="single-team-box team-box-bg-2">
                                <div className="team-box-inner">
                                <h3>alex browne</h3>
                                <p className="team-meta">
                                    Director, Management &amp; Research
                                </p>
                                <a href="team.html" className="learn-btn">
                                    learn more
                                </a>
                                </div>
                                {/*/.team-box-inner*/}
                            </div>
                            {/*/.single-team-box*/}
                            </div>
                            {/*.col*/}
                            <div className="col-sm-3 col-xs-12">
                            <div className="single-team-box team-box-bg-3">
                                <div className="team-box-inner">
                                <h3>darren j. stevens</h3>
                                <p className="team-meta">Director, Finance Solution</p>
                                <a href="team.html" className="learn-btn">
                                    learn more
                                </a>
                                </div>
                                {/*/.team-box-inner*/}
                            </div>
                            {/*/.single-team-box*/}
                            </div>
                            {/*.col*/}
                            <div className="col-sm-3 col-xs-12">
                            <div className="single-team-box team-box-bg-4">
                                <div className="team-box-inner">
                                <h3>kevin thomson</h3>
                                <p className="team-meta">Head, Legal Advising</p>
                                <a href="team.html" className="learn-btn">
                                    learn more
                                </a>
                                </div>
                                {/*/.team-box-inner*/}
                            </div>
                            {/*/.single-team-box*/}
                            </div>
                            {/*.col*/}
                        </div>
                        {/*/.team-carousel*/}
                        </div>
                        {/*/.row*/}
                    </div>
                    {/*/.container*/}
                    </div>
                    {/*/.team-card*/}
                </div>
                {/*/.team-details*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/.team*/}
            {/*team end*/}
            {/*pricing start */}
            <section id="pricing" className="pricing">
                <div className="container">
                <div className="pricing-details">
                    <div className="section-header text-center">
                    <h2 className="price-head">our pricing table</h2>
                    <p>
                        Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                    </p>
                    </div>
                    {/*/.section-header*/}
                    <div className="pricing-content">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                        <div className="pricing-box">
                            <div className="pricing-header">
                            <h2>basic</h2>
                            <h3 className="packeg_p">
                                <span>$</span>99
                            </h3>
                            <p>monthly</p>
                            </div>
                            {/*/.pricing-header*/}
                            <ul className="plan-lists">
                            <li>01 user</li>
                            <li>01 project</li>
                            <li>01 advisor team</li>
                            <li>complete statistics</li>
                            <li>E-Mail support</li>
                            </ul>
                            {/*/ul*/}
                            <div className="project-btn pricing-btn text-center">
                            <a href="project.html" className="project-view">
                                Sign Up Now
                            </a>
                            </div>
                            {/*/.project-btn*/}
                        </div>
                        {/*/.pricing-box*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-md-3 col-sm-6">
                        <div className="pricing-box">
                            <div className="pricing-header">
                            <h2>standard</h2>
                            <h3 className="packeg_p">
                                <span>$</span>299
                            </h3>
                            <p>monthly</p>
                            </div>
                            {/*/.pricing-header*/}
                            <ul className="plan-lists">
                            <li>05 user</li>
                            <li>05 project</li>
                            <li>05 advisor team</li>
                            <li>complete statistics</li>
                            <li>full support</li>
                            </ul>
                            {/*/ul*/}
                            <div className="project-btn pricing-btn text-center">
                            <a href="project.html" className="project-view">
                                Sign Up Now
                            </a>
                            </div>
                            {/*/.project-btn*/}
                        </div>
                        {/*/.pricing-box*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-md-3 col-sm-6">
                        <div className="pricing-box">
                            <div className="pricing-header">
                            <h2>advanced</h2>
                            <h3 className="packeg_p">
                                <span>$</span>499
                            </h3>
                            <p>monthly</p>
                            </div>
                            {/*/.pricing-header*/}
                            <ul className="plan-lists">
                            <li>10 user</li>
                            <li>10 project</li>
                            <li>10 advisor team</li>
                            <li>complete statistics</li>
                            <li>full support</li>
                            </ul>
                            {/*/ul*/}
                            <div className="project-btn pricing-btn text-center">
                            <a href="project.html" className="project-view">
                                Sign Up Now
                            </a>
                            </div>
                            {/*/.project-btn*/}
                        </div>
                        {/*/.pricing-box*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-md-3 col-sm-6">
                        <div className="pricing-box">
                            <div className="pricing-header">
                            <h2>unlimited</h2>
                            <h3 className="packeg_p">
                                <span>$</span>1099
                            </h3>
                            <p>monthly</p>
                            </div>
                            {/*/.pricing-header*/}
                            <ul className="plan-lists">
                            <li>unlimited user</li>
                            <li>unlimited project</li>
                            <li>unlimited advisor team</li>
                            <li>complete statistics</li>
                            <li>full support</li>
                            </ul>
                            {/*/ul*/}
                            <div className="project-btn pricing-btn text-center">
                            <a href="project.html" className="project-view">
                                Sign Up Now
                            </a>
                            </div>
                            {/*/.project-btn*/}
                        </div>
                        {/*/.pricing-box*/}
                        </div>
                        {/*/.col*/}
                    </div>
                    {/*/.row*/}
                    </div>
                    {/*/.pricing-content*/}
                </div>
                {/*/.pricing-details*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/.pricing*/}
            {/*pricing end*/}
            {/* testemonial Start */}
            <section className="testemonial">
                <div className="container">
                <div className="section-header text-center">
                    <h2>
                    <span>what our client say about us</span>
                    </h2>
                </div>
                {/*/.section-header*/}
                <div className="owl-carousel owl-theme" id="testemonial-carousel">
                    <div className="home1-testm item">
                    <div className="home1-testm-single text-center">
                        <div className="home1-testm-img">
                        <img src="assets/images/client/testimonial1.jpg" alt="img" />
                        </div>
                        {/*/.home1-testm-img*/}
                        <div className="home1-testm-txt">
                        <span className="icon section-icon">
                            <i className="fa fa-quote-left" aria-hidden="true" />
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet conse adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam..
                        </p>
                        <h3>
                            <a href="#">kevin watson</a>
                        </h3>
                        <h4>CEO, Kingston</h4>
                        </div>
                        {/*/.home1-testm-txt*/}
                    </div>
                    {/*/.home1-testm-single*/}
                    </div>
                    {/*/.item*/}
                    <div className="home1-testm item">
                    <div className="home1-testm-single text-center">
                        <div className="home1-testm-img">
                        <img src="assets/images/client/testimonial2.jpg" alt="img" />
                        </div>
                        {/*/.home1-testm-img*/}
                        <div className="home1-testm-txt">
                        <span className="icon section-icon">
                            <i className="fa fa-quote-left" aria-hidden="true" />
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet conse adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam..
                        </p>
                        <h3>
                            <a href="#">kevin watson</a>
                        </h3>
                        <h4>CEO, Kingston</h4>
                        </div>
                        {/*/.home1-testm-txt*/}
                    </div>
                    {/*/.home1-testm-single*/}
                    </div>
                    {/*/.item*/}
                    <div className="home1-testm item">
                    <div className="home1-testm-single text-center">
                        <div className="home1-testm-img">
                        <img src="assets/images/client/testimonial1.jpg" alt="img" />
                        </div>
                        {/*/.home1-testm-img*/}
                        <div className="home1-testm-txt">
                        <span className="icon section-icon">
                            <i className="fa fa-quote-left" aria-hidden="true" />
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet conse adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam..
                        </p>
                        <h3>
                            <a href="#">kevin watson</a>
                        </h3>
                        <h4>CEO, Kingston</h4>
                        </div>
                        {/*/.home1-testm-txt*/}
                    </div>
                    {/*/.home1-testm-single*/}
                    </div>
                    {/*/.item*/}
                </div>
                {/*/.testemonial-carousel*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/.testimonial*/}
            {/* testemonial End */}
            {/*clients start*/}
            <section className="clients">
                <div className="container">
                <div className="clients-area">
                    <div className="owl-carousel owl-theme" id="client">
                    <div className="item">
                        <a href="#">
                        <img src="assets/images/client/client1.png" alt="brand-image" />
                        </a>
                    </div>
                    {/*/.item*/}
                    <div className="item">
                        <a href="#">
                        <img src="assets/images/client/client2.png" alt="brand-image" />
                        </a>
                    </div>
                    {/*/.item*/}
                    <div className="item">
                        <a href="#">
                        <img src="assets/images/client/client3.png" alt="brand-image" />
                        </a>
                    </div>
                    {/*/.item*/}
                    <div className="item">
                        <a href="#">
                        <img src="assets/images/client/client4.png" alt="brand-image" />
                        </a>
                    </div>
                    {/*/.item*/}
                    <div className="item">
                        <a href="#">
                        <img src="assets/images/client/client5.png" alt="brand-image" />
                        </a>
                    </div>
                    {/*/.item*/}
                    </div>
                    {/*/.owl-carousel*/}
                </div>
                {/*/.clients-area*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/.clients*/}
            {/*clients end*/}
            {/*nwes start */}
            <section className="news">
                <div className="container">
                <div className="news-details">
                    <div className="section-header text-center">
                    <h2>our latest news</h2>
                    <p>
                        Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                    </p>
                    </div>
                    {/*/.section-header*/}
                    <div className="news-card news-card-pb-25">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                        <div className="single-news-box">
                            <div className="news-box-bg">
                            <img src="assets/images/blog/bl1.jpg" alt="blog image" />
                            <div className="isotope-overlay">
                                <a href="blog_single.html">
                                <span className="lnr lnr-link" />
                                </a>
                            </div>
                            </div>
                            {/*/.team-box-bg*/}
                            <div className="news-box-inner">
                            <h3>
                                <a href="blog_single.html">
                                The Pros and Cons of Starting an Online Consulting
                                Business
                                </a>
                            </h3>
                            <p className="news-meta">
                                Posted By: <span>Mick Steven</span> // On{" "}
                                <span>12th June, 2017</span>
                            </p>
                            {/* <a href="#" class="learn-btn">
                                                            learn more
                                                        </a> */}
                            </div>
                            {/*/.news-box-inner*/}
                        </div>
                        {/*/.single-news-box*/}
                        </div>
                        {/*.col*/}
                        <div className="col-md-4 col-sm-6">
                        <div className="single-news-box">
                            <div className="news-box-bg">
                            <img src="assets/images/blog/bl2.jpg" alt="blog image" />
                            <div className="isotope-overlay">
                                <a href="blog_single.html">
                                <span className="lnr lnr-link" />
                                </a>
                            </div>
                            </div>
                            {/*/.team-box-bg*/}
                            <div className="news-box-inner">
                            <h3>
                                <a href="blog_single.html">
                                8 Secrets for Your successful Business Mentor Won't Tell
                                You
                                </a>
                            </h3>
                            <p className="news-meta">
                                Posted By: <span>Mick Steven</span> // On{" "}
                                <span>12th June, 2017</span>
                            </p>
                            {/* <a href="#" class="learn-btn">
                                                            learn more
                                                        </a> */}
                            </div>
                            {/*/.news-box-inner*/}
                        </div>
                        {/*/.single-news-box*/}
                        </div>
                        {/*.col*/}
                        <div className="col-md-4 col-sm-6">
                        <div className="single-news-box">
                            <div className="news-box-bg">
                            <img src="assets/images/blog/bl3.jpg" alt="blog image" />
                            <div className="isotope-overlay">
                                <a href="blog_single.html">
                                <span className="lnr lnr-link" />
                                </a>
                            </div>
                            </div>
                            {/*/.team-box-bg*/}
                            <div className="news-box-inner">
                            <h3>
                                <a href="blog_single.html">
                                Hire a Branding Consultant With a Similar Aesthetic to
                                Your Own
                                </a>
                            </h3>
                            <p className="news-meta">
                                Posted By: <span>Mick Steven</span> // On{" "}
                                <span>12th June, 2017</span>
                            </p>
                            {/* <a href="#" class="learn-btn">
                                                            learn more
                                                        </a> */}
                            </div>
                            {/*/.news-box-inner*/}
                        </div>
                        {/*/.single-news-box*/}
                        </div>
                        {/*.col*/}
                    </div>
                    {/*/.row*/}
                    <div className="project-btn text-center">
                        <a href="blog.html" className="project-view">
                        read more
                        </a>
                    </div>
                    {/*/.project-btn*/}
                    </div>
                    {/*/.news-card*/}
                </div>
                {/*/news-details*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/news*/}
            {/*news end*/}
            {/*contact start*/}
            <section className="contact">
                <div className="container">
                <div className="contact-details">
                    <div className="section-header contact-head  text-center">
                    <h2>contact us</h2>
                    <p>
                        Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                    </p>
                    </div>
                    {/*/.section-header*/}
                    <div className="contact-content">
                    <div className="row">
                        <div className="col-sm-offset-1 col-sm-5">
                        <div className="single-contact-box">
                            <div className="contact-right">
                            <div className="contact-adress">
                                <div className="contact-office-address">
                                <h3>contact info</h3>
                                <p>125, Park street avenue, Brocklyn, Newyork.</p>
                                <div className="contact-online-address">
                                    <div className="single-online-address">
                                    <i className="fa fa-phone" />
                                    +11253678958
                                    </div>
                                    {/*/.single-online-address*/}
                                    <div className="single-online-address">
                                    <i className="fa fa-envelope-o" />
                                    <span>info@mail.com</span>
                                    </div>
                                    {/*/.single-online-address*/}
                                </div>
                                {/*/.contact-online-address*/}
                                </div>
                                {/*/.contact-office-address*/}
                                <div className="contact-office-address">
                                <h3>social partner</h3>
                                <div className="contact-icon">
                                    <ul>
                                    <li>
                                        <a href="#">
                                        <i
                                            className="fa fa-facebook"
                                            aria-hidden="true"
                                        />
                                        </a>
                                    </li>
                                    {/*/li*/}
                                    <li>
                                        <a href="#">
                                        <i
                                            className="fa fa-google-plus"
                                            aria-hidden="true"
                                        />
                                        </a>
                                    </li>
                                    {/*/li*/}
                                    <li>
                                        <a href="#">
                                        <i
                                            className="fa fa-linkedin"
                                            aria-hidden="true"
                                        />
                                        </a>
                                    </li>
                                    {/*/li*/}
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                        </a>
                                    </li>
                                    {/*/li*/}
                                    </ul>
                                    {/*/ul*/}
                                </div>
                                {/*/.contact-icon*/}
                                </div>
                                {/*/.contact-office-address*/}
                            </div>
                            {/*/.contact-address*/}
                            </div>
                            {/*/.contact-right*/}
                        </div>
                        {/*/.single-contact-box*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-sm-5">
                        <div className="single-contact-box">
                            <div className="contact-form">
                            <h3>Leave us a Massage Here</h3>
                            <form>
                                <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstname"
                                        placeholder="First Name"
                                        name="firstname"
                                    />
                                    </div>
                                    {/*/.form-group*/}
                                </div>
                                {/*/.col*/}
                                <div className="col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastname"
                                        placeholder="Last Name"
                                        name="laststname"
                                    />
                                    </div>
                                    {/*/.form-group*/}
                                </div>
                                {/*/.col*/}
                                </div>
                                {/*/.row*/}
                                <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        name="email"
                                    />
                                    </div>
                                    {/*/.form-group*/}
                                </div>
                                {/*/.col*/}
                                <div className="col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        placeholder="Phone"
                                        name="phone"
                                    />
                                    </div>
                                    {/*/.form-group*/}
                                </div>
                                {/*/.col*/}
                                </div>
                                {/*/.row*/}
                                <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        rows={7}
                                        id="comment"
                                        placeholder="Message"
                                        defaultValue={""}
                                    />
                                    </div>
                                    {/*/.form-group*/}
                                </div>
                                {/*/.col*/}
                                </div>
                                {/*/.row*/}
                                <div className="row">
                                <div className="col-sm-12">
                                    <div className="single-contact-btn pull-right">
                                    <button className="contact-btn" type="button">
                                        send message
                                    </button>
                                    </div>
                                    {/*/.single-single-contact-btn*/}
                                </div>
                                {/*/.col*/}
                                </div>
                                {/*/.row*/}
                            </form>
                            {/*/form*/}
                            </div>
                            {/*/.contact-form*/}
                        </div>
                        {/*/.single-contact-box*/}
                        </div>
                        {/*/.col*/}
                    </div>
                    {/*/.row*/}
                    </div>
                    {/*/.contact-content*/}
                </div>
                {/*/.contact-details*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/.contact*/}
            {/* new-project start */}
            <section id="new-project" className="new-project">
                <div className="container">
                <div className="new-project-details">
                    <div className="row">
                    <div className="col-md-10 col-sm-8">
                        <div className="single-new-project">
                        <h3>Want to start a new project with us? Let’s Start!</h3>
                        </div>
                        {/* /.single-new-project*/}
                    </div>
                    {/* /.col*/}
                    <div className="col-md-2 col-sm-4">
                        <div className="single-new-project">
                        <a href="#" className="slide-btn">
                            start now
                        </a>
                        </div>
                        {/* /.single-new-project*/}
                    </div>
                    {/* /.col*/}
                    </div>
                    {/* /.row*/}
                </div>
                {/* /.new-project-details*/}
                </div>
                {/* /.container*/}
            </section>
            {/* /.new-project*/}
        </>
    )
}
export default Home;