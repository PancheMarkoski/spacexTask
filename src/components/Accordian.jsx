import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Accordian = ({ title, links }) => {
    return (
        <div>
            <Accordion sx={{ mt: 5 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Article: <a href={links.article_link}>{links.article_link}</a>
                        <br />
                        Video: <a href={links.video_link}>{links.video_link}</a>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Accordian