import React from 'react'
import { useMission } from '../hooks/useMission'
import { useParams } from 'react-router-dom'
import { Box, Typography, Divider } from "@mui/material"

import Spinner from './Spinner'
import Accordian from "./Accordian"

const Rocket = () => {

    const { id } = useParams();

    const { error, loading, data } = useMission(id)

    if (loading) return <Spinner />

    if (error) return <div>Something wrong...</div>

    console.log(data)

    return (
        <Box flex={3} p={2}>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                sx={{ m: 2 }}
            >
                Rocket Details
            </Typography>

            <hr />

            <Box component="div" pt={4}>
                <Typography variant="h5" component="h2" p="2">
                    Rocket name: <span color='primary'>{data.launch.rocket.rocket_name}</span>
                </Typography>
                <Typography variant="h5" component="h2" p="2">
                    Launch Site: {data.launch.launch_site.site_name_long}
                </Typography>
                <Divider>FIRST STAGE</Divider>
                <Typography variant="h5" component="h2" p="2">
                    Flights {data.launch.rocket.first_stage.cores[0].flight}
                </Typography>
                <Divider>SECOND STAGE</Divider>
                <Typography variant="h5" component="h2" p="2">
                    Mass kg: {data.launch.rocket.second_stage.payloads[0].payload_mass_kg}
                    <br />
                    Mass lbs:{data.launch.rocket.second_stage.payloads[0].payload_mass_lbs}
                    <br />
                    Type: {data.launch.rocket.second_stage.payloads[0].payload_type}
                </Typography>

                <Accordian title={"Links"} links={data.launch.links} />
            </Box>
        </Box>
    )
}

export default Rocket