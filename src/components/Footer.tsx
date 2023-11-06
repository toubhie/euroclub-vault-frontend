import React from 'react'
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

                                    <p>A Performativ assessment by <b>Tobi Williams</b></p>

                                    <p>EuroClub Vault is a comprehensive database of football players across Europe, offering detailed player profiles from prominent leagues like the English Premier League, the Champions League, and the World Cup. It provides users with extensive player information, including full names, clubs, ages, nationalities, positions, and market values, stored in a secure database. The platform's unique feature is its data enrichment capability, integrating with sources like Wikipedia to provide additional player background and achievements.</p>
                                        
                                    <p>EuroClub Vault supports Create, Read, Update, and Delete (CRUD) operations through both a user interface (UI) and an API, making it a versatile tool for managing player data. Users can also sort and filter player listings, facilitating easy access to specific players and group analysis. Built with React and TypeScript on the frontend and Laravel on the backend, EuroClub Vault includes third-party integrations and thorough testing, catering to football enthusiasts, scouts, and analysts seeking a comprehensive football player information hub.</p>
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
                                        Copyright &copy; {new Date().getFullYear()}. All rights reserved
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