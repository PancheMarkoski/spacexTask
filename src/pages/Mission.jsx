import React from 'react'

import { Stack } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Rocket from '../components/Rocket';


const Mission = () => {

    return (
        <Stack direction="row" spacing={2} justifyContent="space-evenly" >
            <Sidebar />
            <Rocket />
        </Stack>
    )
}

export default Mission