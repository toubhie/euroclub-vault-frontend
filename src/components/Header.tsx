import { Menu } from '@mui/icons-material'
import { Button, Grid, } from '@mui/material'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Logo from './common/Logo'

const Header = () => {
    const sm = useMediaQuery({ query: '(max-width: 750px)' })

    return (
        <header>
            <div className="header-area">
                <div className="header-bottom pt-2 pb-2 header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <Grid container alignItems={'center'}>
                                <Grid item xs={6} sm={6} md={3} lg={3}>
                                    <Logo />
                                </Grid>
                                {/* <Grid item xs={6} sm={6} md={9} lg={9}>
                                    {
                                        <Button>
                                            <Menu style={{ fontSize: '30px' }} />
                                        </Button>
                                    }
                                </Grid> */}
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header