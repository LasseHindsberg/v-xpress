import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function FAQ() {

    return (
        <section className="FAQ">
            <Accordion className="FAQ__item">
                <AccordionSummary classname="FAQ__title"
                    expandIcon={<ExpandMoreIcon style={{ color:"white"}}/>}
                >
                    <Typography>How do I get started?</Typography>
                </AccordionSummary>
                <AccordionDetails classname="FAQ__content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at, deleniti optio similique ea magni, quibusdam expedita vero facere, vitae labore sapiente distinctio minima aperiam?
                    </p>
                </AccordionDetails>
            </Accordion>

            <Accordion className="FAQ__item">
                <AccordionSummary classname="FAQ__title"
                    expandIcon={<ExpandMoreIcon style={{ color:"white"}}/>}
                >
                    <Typography>Why are your platform so secure?</Typography>
                </AccordionSummary>
                <AccordionDetails classname="FAQ__content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at, deleniti optio similique ea magni, quibusdam expedita vero facere, vitae labore sapiente distinctio minima aperiam?
                    </p>
                </AccordionDetails>
            </Accordion>
            
            <Accordion className="FAQ__item">
                <AccordionSummary classname="FAQ__title"
                    expandIcon={<ExpandMoreIcon style={{ color:"white"}}/>}
                >
                    <Typography>How do I cancel Membership?</Typography>
                </AccordionSummary>
                <AccordionDetails classname="FAQ__content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at, deleniti optio similique ea magni, quibusdam expedita vero facere, vitae labore sapiente distinctio minima aperiam?
                    </p>
                </AccordionDetails>
            </Accordion>

            <Accordion className="FAQ__item">
                <AccordionSummary classname="FAQ__title"
                    expandIcon={<ExpandMoreIcon style={{ color:"white"}}/>}
                >
                    <Typography>Why buy a Membership?</Typography>
                </AccordionSummary>
                <AccordionDetails classname="FAQ__content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at, deleniti optio similique ea magni, quibusdam expedita vero facere, vitae labore sapiente distinctio minima aperiam?
                    </p>
                </AccordionDetails>
            </Accordion>
        </section>
    )
}