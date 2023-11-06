import { SportsSoccer } from '@mui/icons-material'
import React from 'react'

const Logo = () => {
    return (
        <div className="logo">
            <SportsSoccer />
            <p style={{ color: '#000' }}>
                <span>EuroClub Vault</span>
            </p>
        </div>
    )
}

export default Logo