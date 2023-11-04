import { LinearProgress } from '@mui/material'
import React from 'react'
import Logo from './Logo'

const Loader = () => {
    return (
        <div className='loader'>
            <Logo />
            <LinearProgress />
        </div>
    )
}

export default Loader
