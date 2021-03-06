import { Button } from "@mui/material";

import { Link } from "@reach/router";

export default function PriceCard({ title, price, subscription, serviceFee, trading, market }) {

    return (
        <div className="priceCard">
            <h3 className="priceCard__header">{title}</h3>
            <h4 className="priceCard__price">{price}</h4>
            {subscription ?
                <p className="priceCard__subscription">Pr/Md</p>
                : null
            }
                <h4 className="priceCard__benefits">Benefits</h4>
                <ul className="priceCard__benefitsList">
                    {serviceFee ?
                        <li className="priceCard__serviceFee">Pay 10% in service fees for every item you buy.</li>
                        :
                        <li className="priceCard__serviceFee">No service fees.</li>
                    }
                    <li className="priceCard__trading">{trading}</li>

                    {market ?
                        <li className="priceCard__market">Access to market statistics and other advanced settings.</li>
                        :
                        null
                    }
                </ul>
                <div className="priceCard__readMore">
                    <Button variant="outlined" color="info">
                        <Link to="/offers">Read More</Link>
                    </Button>
                </div>
            </div>
    )
}