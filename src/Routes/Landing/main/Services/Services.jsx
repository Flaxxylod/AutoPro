import "./services.css"
import ServiceCard from "./ServiceCards/ServiceCard";
import { CardsData } from "./ServiceCards/dataCards";
import Button from "./../../../../Elements/button/Button"
import { useState } from "react";
const Services = () => {
    const [SelectedId, SetSelectedId] = useState(0)
    const [Hovered, SetHovered] = useState("rightBlock-hero")
    const CardData = CardsData.map((obj) =>
        <ServiceCard OnMouseEnter={() => (SetSelectedId(obj.id), SetHovered("rightBlock-hero-hovered"))} OnMouseLeave={() => SetHovered("rightBlock-hero")} picture={obj.picture} head={obj.head} text={obj.text} key={obj.id} />
    )
    return (
        <div className="Services-content">
            <div className="container">
                <div className="Services-titleBlock">
                    <section style={{ maxWidth: "170px" }}>
                        <span>
                            <h2>услуги</h2>

                        </span>
                    </section>
                    <section style={{ maxWidth: "892px", textAlign: "center",  marginTop: "44px"}}>
                        <span>
                            <strong>
                                Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором продукции.
                            </strong>
                        </span>
                    </section>

                </div>
                <div className="Services-mainBlock">
                    <div className="Services-leftBlock">
                        {CardData}
                    </div>


                    <div className="Services-rightBlock">
                        <img className={Hovered} src={CardsData[SelectedId].hero} alt="" />
                    </div>
                </div>
                <div style={{ width: "100%", marginTop: "32px", display: "flex", justifyContent: "center" }}>
                    <Button size="higher">Задать вопрос</Button>
                </div>
            </div>
        </div >
    );
}

export default Services;