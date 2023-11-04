import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './common/Logo'

const Footer = () => {
    return (
        <footer className='pb-0'>
            <div className="footer-area footer-padding">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-12">
                            <div className="single-footer-caption mb-50">
                                <div className="single-footer-caption mb-30 d-flex align-items-center flex-direction-column">

                                    <div className="footer-logo text-center mb-2">
                                        <Logo />
                                    </div>
                        
                                    <div className="footer-tittle mb-2">
                                        <div className="footer-pera">
                                            <ul id="navigation" className='mb-0'>
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/publications">Publications</Link></li>
                                                <li><Link to="/resources">Resources</Link></li>
                                                <li><Link to="/">FSRCC</Link></li>
                                                <li><Link to="/contact">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="footer-social">
                                        <a href="#"><i className="fab fa-facebook"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-area footer-bg">
                <div className="container">
                    <div className="footer-border">
                        <div className="row d-flex align-items-center">
                            <div className="col-xl-12 ">
                                <div className="footer-copy-right text-center">
                                    <p>
                                        Copyright &copy; { new Date().getFullYear() }. All rights reserved
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer