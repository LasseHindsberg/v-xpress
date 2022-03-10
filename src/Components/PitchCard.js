
export default function PitchCard({icon, heading, body,}) {
        return (
                <section className="pitchCard">
                        <div className="pitchCard__icon">
                        {icon}
                        </div>
                        <h3 className="pitchCard__header">{heading}</h3>
                        <p className="pitchCard__body">{body}</p>
                </section>
        )
}