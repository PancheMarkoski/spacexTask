import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#0a1929" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    SpaceX
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar