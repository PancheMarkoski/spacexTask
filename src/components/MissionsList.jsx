import React from 'react'
import { Link } from 'react-router-dom'

import { useMissions } from "../hooks/useMissions"

import { Container, Grid, Card, CardContent, Typography } from '@mui/material'

import Spinner from './Spinner'

const MissionsList = () => {

    const { error, loading, data } = useMissions()

    if (loading) return <Spinner />

    if (error) return <div>Something wrong...</div>

    console.log({ data })
    return (
        <Container sx={{ py: 8 }} maxWidth="md" >
            <Grid container spacing={4}>
                {data.launchesPast.map(mission => {
                    return (
                        <Grid item key={mission.id} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: "rgb(18, 18, 18)" }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Link to={`/${mission.id}`} style={{ cursor: "pointer", textDecoration: 'none', color: "inherit" }} >
                                        <Typography sx={{ fontSize: 14 }} color="primary.light" gutterBottom>
                                            Mission:
                                        </Typography>
                                        <Typography variant="h5" component="div" color="white">
                                            {mission.mission_name}
                                        </Typography>
                                        <div style={{ backgroundColor: "white", width: "100%", height: "0.5px" }} />
                                        <br></br>
                                        <Typography sx={{ mb: 1.5 }} color="primary.light">
                                            Launch site:
                                        </Typography>
                                        <Typography variant="body2" color="white">
                                            {mission.launch_site.site_name_long}
                                        </Typography>
                                        <br />
                                        <Typography sx={{ mb: 1.5 }} color="primary.light">
                                            Launch date:
                                        </Typography>
                                        <Typography variant="body2" color="white">
                                            {mission.launch_date_local}
                                        </Typography>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>

    )
}

export default MissionsList