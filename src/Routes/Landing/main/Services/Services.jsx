import "./services.css"
import ServiceCard from "./ServiceCards/ServiceCard";
import { CardsData } from "./ServiceCards/dataCards";

const Services = () => {

    const CardData = CardsData.map((obj) =>
        <ServiceCard picture={obj.picture} head={obj.head} text={obj.text}/>
    )
    return (
        <div className="Services-content">
            <div className="container">
                <div className="Services-titleBlock">
                    <section  style={{maxWidth: "170px"}}>
                        <span>
                            <h2 style={{ borderBottom: "4px solid var(--orange-color-solid)"}}>услуги</h2>

                    </span>
                </section>
                <section style={{maxWidth: "892px", textAlign: "center"}}> 
                    <span>
                        <strong>
                            Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором продукции.
                        </strong>
                    </span>
                </section>

            </div>
            <div className="Services-mainBlock">
                <div className="Services-leftBlock">

                </div>


                <div className="Services-rightBlock">
                    {CardData}
                </div>
            </div>
        </div>
        </div >
    );
}

export default Services;