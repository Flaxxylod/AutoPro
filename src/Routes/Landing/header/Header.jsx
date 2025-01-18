import "./header.css"
import Nav from "../nav/Nav";
import Button from "../../../Elements/button/Button";
import Payment from "../../../assets/header/icons/Payment.svg"
import Support from "../../../assets/header/icons/Support.svg"
import Quality from "../../../assets/header/icons/Quality.svg"
import WorkSchedule from "../../../assets/header/icons/WorkSchedule.svg"
import Arrow from "../../../assets/header/icons/Arrow.svg"
const Main = () => {
    return (
        <div className="Header-content">
            <Nav />

            <div className="container">
                <div className="Header-block-main">
                    <div className="Header-block-left">
                        <h1>
                            надежные, качественные аккумуляторы
                        </h1>
                        <Button color={"transparent"}>перейти в каталог</Button>
                    </div>
                    <div className="Header-block-bottom">
                        <section className="Header-block-bottom-SwitchLine" />
                        <section className="Header-block-bottom-SwitchLine" />
                        <section className="Header-block-bottom-SwitchLine" />
                        <section className="Header-block-bottom-SwitchLine" />
                    </div>


                </div>

            </div>
            {/* РЕАЛИЗОВАТЬ ПОТОМ ЧЕРЕЗ MAP */}
            <div style={{ backgroundColor: "var(--black-color-button)" }} className="Header-block-bottom-attributes" >
                <div className="Header-block-bottom-cards">
                    <section className="Header-block-bottom-card-elements-icon">
                        <img src={Payment} alt="" />
                        <span>Наличный и безналичный расчет</span>

                    </section>
                </div>
                <div className="Header-block-bottom-cards">
                    <section className="Header-block-bottom-card-elements-icon">
                        <img src={Support} alt="" />
                        <span>Техническая помощь и консультация</span>

                    </section>
                </div>
                <div className="Header-block-bottom-cards">
                    <section className="Header-block-bottom-card-elements-icon">
                        <img src={Quality} alt="" />
                        <span>Только качественная и проверенная продукция</span>
                        <img className="Header-block-bottom-card-elements-arrow" src={Arrow} alt="" />
                    </section>
                </div>
                <div className="Header-block-bottom-cards">
                    <section className="Header-block-bottom-card-elements-icon">
                        <img src={WorkSchedule} alt="" />
                        <span>Мы всегда на связи
                            с 9:00 до 18:00!</span>
                        <img className="Header-block-bottom-card-elements-arrow" src={Arrow} alt="" />
                    </section>
                </div>
            </div>
            {/* РЕАЛИЗОВАТЬ ПОТОМ ЧЕРЕЗ MAP */}
        </div>
    );
}

export default Main;