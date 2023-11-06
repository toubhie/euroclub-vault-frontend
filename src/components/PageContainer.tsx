import React from 'react'
import { Helmet } from 'react-helmet'
import Loader from './common/Loader'
import Footer from './Footer'
import Header from './Header'

const PageContainer = ({ children, pageTitle = '', processing = false }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            {processing && <Loader />}

            { pageTitle && <Helmet><title>{pageTitle} | EuroClub Vault</title></Helmet> }

            <Header />

            <div style={{ flex: 1 }}>
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default PageContainer