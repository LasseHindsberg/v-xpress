import PriceCard from "./PriceCard";


export default function PriceContainer() {
    return (
        <section className="priceContainer">
            <PriceCard
                title="Beginner"
                price="Free"
                subscription={false}
                serviceFee={true}
                market={true}
                trading="Same Secure Platform as the pros."

            />
            <PriceCard
                title="Semi-pro"
                price="$10"
                subscription={true}
                trading="Best Trading platform for CS:GO."

            />
            <PriceCard
                title="Professional"
                price="$15"
                subscription={true}
                market={true}
                trading="Best Trading platform for CS:GO."
            />
        </section>
    )
}