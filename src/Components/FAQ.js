import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { FiChevronDown } from "react-icons/fi";
export default function FAQ() {

    return (
        <section className="FAQContainer">
            <Accordion>
                <AccordionSummary
                    expandIcon={<FiChevronDown/>}
                >
                    <Typography>Lorem, ipsum dolor.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at, deleniti optio similique ea magni, quibusdam expedita vero facere, vitae labore sapiente distinctio minima aperiam?
                    </p>
                </AccordionDetails>
            </Accordion>
        </section>
    )
}