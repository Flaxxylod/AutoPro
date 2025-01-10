import "./cards.css";
import Button from "../../../../../Elements/button/Button";
import { useState } from "react";

const ServiceCards = ({ picture, name , id}) => {
    const [isHovered, setIsHovered] = useState(false);


    const backgroundStyle = {
        transition: '1s ',
        background: `url(${picture})`,

    };

    return (
        <div
            key={id}
            className="Card-content"
            style={backgroundStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <section className="Card-content-elements">
                <strong style={{
                    fontSize: "24px",
                    color: "var(--white-color-text)",
                    textTransform: "uppercase"
                }}>
                    {name}
                </strong>
                <Button size="high">Заказать онлайн</Button>
            </section>
        </div>
    );
}

export default ServiceCards;