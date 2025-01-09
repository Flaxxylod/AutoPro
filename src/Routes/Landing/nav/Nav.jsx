import "./nav.css"
import Logo from "./../../../assets/nav/logo.svg"
import Backpack from "./../../../assets/nav/icons/backpack.svg"
import Search from "./../../../assets/nav/icons/search.svg"
import Button from "./../../../Elements/button/Button"
const Nav = () => {
    return (
        <div className="Nav-content">
            <div className="container">
                <div className="nav-elements">
                    <section style={{ display: "flex", textAlign: "center", columnGap: "32px" }}>
                        <img src={Logo} alt="" style={{ margin: "0 0 18px 0" }} />
                        <ul style={{ display: "flex", alignItems: "center", columnGap: "28px" }} className="nav-elements-button">
                            <li><a href="#!">компания</a></li>
                            <li><a href="#!">каталог</a></li>
                            <li><a href="#!">услуги</a></li>
                            <li><a href="#!">информация</a></li>
                            <li><a href="#!">контакты</a></li>
                        </ul>
                    </section>
                    <section className="nav-elements-Button&icons" style={{display: "flex", alignItems: "center", columnGap:"23px"}}>
                        <Button>Заказать звонок</Button>
                        <ul className="nav-elements-icons" style={{display: "flex", columnGap:"12px"}}>
                            <li><a href="#!"><img src={Search} alt="" /></a></li>
                            <li><a href="#!"><img src={Backpack} alt="" /></a></li>
                            <li><a href=""><div className="notifications" >0</div></a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Nav;