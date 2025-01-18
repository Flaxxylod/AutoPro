import "./ByCompany.css"
import Hero from "./../../../../assets/main/ByCompany/Cards/Charater.png"
import Button from "./../../../../Elements/button/Button"
const Bycompany = () => {
    return (
        <div className="Bycompany-content">
            <div className="container">
                <div className="Bycompany-headBlock">
                    <span><h2 style={{ color: "var(--white-color-text)" }}>О компании</h2></span>
                </div>
                <div className="Bycompany-mainBlock">
                    <div className="Bycompany-mainBlock-Picture">
                        <section>
                            <img src={Hero} alt="" />
                        </section>
                    </div>
                    <section className="Bycompany-mainBlock-info">
                        <span>
                            Машина плохо заводится? Аккумулятор вас подводит? Не проблема! Вам в
                            «PRO Auto»! Мы подберём хороший, надёжный, а главное недорогой аккумулятор именно для вашего авто! С 1997 года сеть магазинов «PRO Auto» занимается продажей автомобильных аккумуляторов, масел, расходных материалов, химией
                            и аксессуаров.
                        </span>

                        <Button size="high">Узнать больше</Button>

                    </section>
                </div>
            </div>
        </div>
    );
}

export default Bycompany;