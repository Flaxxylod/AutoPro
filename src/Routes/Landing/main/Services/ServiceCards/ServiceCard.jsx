import "./serviceCard.css"
import FreeCounsult from "./../../../../../assets/main/Services/Cards/Freeconsultation.svg"
const SeviceCard = ({picture, head, text}) => {
    return (
        <div className="ServiceCard-content">
            <div className="Card-content-mainBlock">
                <section className="Card-leftBlock"><img src={picture} alt="" /></section>
                <section className="Card-rightBlock">
                    <span><h3>{head}</h3></span>
                    <span>{text}</span>
                </section>
            </div>
        </div>
    );
}

export default SeviceCard;