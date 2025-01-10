import "./serviceCard.css"

const SeviceCard = ({picture, head, text, OnMouseEnter,  OnMouseLeave}) => {
    
    return (
        <div onMouseEnter={OnMouseEnter}  onMouseLeave={OnMouseLeave} className="ServiceCard-content">
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