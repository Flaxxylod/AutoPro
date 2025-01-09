import "./Description.css"
import ServiceCards from "./Cards/ServiceCards";
import { Cards } from "./Cards/CardsData";
const DescriptionBycompany = () => {

    const Card = Cards.map((obj) =>
        <ServiceCards picture={obj.picture} name={obj.name} key={obj.id} />
    )

    return (
        <div className="DescriptionBycompany-content">
            <div className="container">
                <div style={{ textAlign: "center" }} className="DescriptionBycompany-titleBlock">
                    <span ><h2>Автотовары: аксессуары,<br />
                        расходники и многое другое</h2></span>
                    <hr style={{ marginTop: "26px", marginBottom: "32px" }} />
                    <strong >PROAuto - это специализированный интернет магазин востребованных <br /> товаров  для автомобилей. </strong>
                </div>
                <div className="DescriptionBycompany-block-cards">
                    {Card}
                </div>
            </div>

        </div>
    );
}

export default DescriptionBycompany;