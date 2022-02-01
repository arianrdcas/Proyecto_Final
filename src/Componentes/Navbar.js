import React from "react";
import './assets/css/style.css';
import './assets/css/animate.css';
import './assets/css/bootsnav.css';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/hover-min.css';
import './assets/css/magnific-popup.css';
/*import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';*/
import './assets/css/responsive.css';



const Navbar  = () => {
    return (
            <>
            {/* META DATA */}
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
            {/*font-family*/}
            <link
                href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
                rel="stylesheet"
            />
            {/* TITLE OF SITE */}
            <title>Zombiz</title>
            {/* for title img */}
            <link
                rel="shortcut icon"
                type="image/icon"
                href="assets/images/logo/favicon.png"
            />
            {/*font-awesome.min.css*/}
            <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
            {/*linear icon css*/}
            <link
                rel="stylesheet"
                href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
            />
            {/*animate.css*/}
            <link rel="stylesheet" href="assets/css/animate.css" />
            {/*hover.css*/}
            <link rel="stylesheet" href="assets/css/hover-min.css" />
            {/*vedio player css*/}
            <link rel="stylesheet" href="assets/css/magnific-popup.css" />
            {/*owl.carousel.css*/}
            <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
            <link href="assets/css/owl.theme.default.min.css" rel="stylesheet" />
            {/*bootstrap.min.css*/}
            <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
            {/* bootsnav */}
            <link href="assets/css/bootsnav.css" rel="stylesheet" />
            {/*style.css*/}
            <link rel="stylesheet" href="assets/css/style.css" />
            {/*responsive.css*/}
            <link rel="stylesheet" href="assets/css/responsive.css" />
            {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
            {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
            {/*[if lt IE 9]>
                        
                        
            <![endif]*/}
            {/*[if lte IE 9]>
                <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
            <![endif]*/}
            {/*header start*/}
            <section className="header">
                <div className="container">
                <div className="header-left">
                    <ul className="pull-left">
                    <li>
                        <a href="#">
                        <i className="fa fa-phone" aria-hidden="true" /> +992 563 542
                        </a>
                    </li>
                    {/*/li*/}
                    <li>
                        <a href="#">
                        <i className="fa fa-envelope" aria-hidden="true" />
                        info@mail.com
                        </a>
                    </li>
                    {/*/li*/}
                    </ul>
                    {/*/ul*/}
                </div>
                {/*/.header-left */}
                <div className="header-right pull-right">
                    <ul>
                    <li className="reg">
                        <a href="#" data-toggle="modal" data-target=".bs-example-modal-sm">
                        Register
                        </a>
                        /
                        <a href="#" data-toggle="modal" data-target=".bs-example-modal-lg">
                        Log in
                        </a>
                        {/* small modal */}
                        <div
                        className="modal fade bs-example-modal-sm"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="mySmallModalLabel"
                        >
                        <div className="modal-dialog modal-sm" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                >
                                <span aria-hidden="true">
                                    <i className="fa fa-close" />
                                </span>
                                </button>
                                <h4 className="modal-title" id="mySmallModalLabel">
                                Sign In
                                </h4>
                                <form className="sm-frm" style={{ padding: 25 }}>
                                <label>Name :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Email"
                                />
                                <label>Passoward :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Passoward"
                                />
                                <label>
                                    <input type="checkbox" name="personality" /> Remenber Me
                                </label>
                                <button
                                    type="button"
                                    className="btn btn-default pull-right"
                                >
                                    Submit
                                </button>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* large modal */}
                        <div
                        className="modal fade bs-example-modal-lg"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="myLargeModalLabel"
                        >
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                >
                                <span aria-hidden="true">
                                    <i className="fa fa-close" />
                                </span>
                                </button>
                                <h4 className="modal-title" id="myLargeModalLabel">
                                Register
                                </h4>
                                <form className="lg-frm" style={{ padding: 25 }}>
                                <label>Name :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                />
                                <label>Email :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Email"
                                />
                                <label>Passoward :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Passoward"
                                />
                                <button
                                    type="button"
                                    className="btn btn-default pull-right"
                                >
                                    Submit
                                </button>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>
                    {/*/li */}
                    <li>
                        <div className="social-icon">
                        <ul>
                            <li>
                            <a href="#">
                                <i className="fa fa-facebook" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fa fa-google-plus" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fa fa-linkedin" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fa fa-twitter" />
                            </a>
                            </li>
                        </ul>
                        {/*/.ul */}
                        </div>
                        {/*/.social-icon */}
                    </li>
                    {/*/li */}
                    </ul>
                    {/*/ul */}
                </div>
                {/*/.header-right */}
                </div>
                {/*/.container */}
            </section>
            {/*/.header*/}
            {/*header end*/}
            {/*menu start*/}
            <section id="menu">
                <div className="container">
                <div className="menubar">
                    <nav className="navbar navbar-default">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                        <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false"
                        >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="index.html">
                        <img src="assets/images/logo/logo.png" alt="logo" />
                        </a>
                    </div>
                    {/*/.navbar-header */}
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div
                        className="collapse navbar-collapse"
                        id="bs-example-navbar-collapse-1"
                    >
                        <ul className="nav navbar-nav navbar-right">
                        <li className="active">
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="about.html">About</a>
                        </li>
                        <li>
                            <a href="service.html">Service</a>
                        </li>
                        <li>
                            <a href="project.html">Project</a>
                        </li>
                        <li>
                            <a href="team.html">Team</a>
                        </li>
                        <li>
                            <a href="blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                        <li>
                            <a href="#">
                            <span className="lnr lnr-cart" />
                            </a>
                        </li>
                        <li className="search">
                            <form action="">
                            <input type="text" name="search" placeholder="Search...." />
                            <a href="#">
                                <span className="lnr lnr-magnifier" />
                            </a>
                            </form>
                        </li>
                        </ul>
                        {/* / ul */}
                    </div>
                    {/* /.navbar-collapse */}
                    </nav>
                    {/*/nav */}
                </div>
                {/*/.menubar */}
                </div>
                {/* /.container */}
            </section>
            </>
    )
}
export default Navbar;