import { CloudSync, AssignmentOutlined, SportsSoccer } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
                <SportsSoccer />
                <p style={{ color: '#000' }}>
                    <span>EuroClub Vault</span>
                </p>
            </Link>
        </div>
    )
}

export default Logo