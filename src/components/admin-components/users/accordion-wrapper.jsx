import { ExpandMoreOutlined } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

const AccordionWrapper = props => (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>{props.content}</AccordionDetails>
    </Accordion>
)

export default AccordionWrapper;