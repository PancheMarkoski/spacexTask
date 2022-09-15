import React from 'react'

import MissionsList from '../components/MissionsList'

import { Typography } from "@mui/material"

const Home = () => {
    return (
        <div>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                sx={{ m: 2 }}
            >
                SpaceX Launches
            </Typography>
            <MissionsList />
        </div>
    )
}

export default Home