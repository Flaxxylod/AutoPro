import "./anchor.css"
import AnchorUp from "./../../assets/elements/AnchorUp.svg"
import AnchorDown from "./../../assets/elements/AnchorDown.svg"

const Anchor = () => {
    return (
        <div className="anchor-content">
            <section style={{marginBottom:"12px"}}>
                <a href="#nav"> <img src={AnchorUp} alt="" /></a>
            </section>
            <section>
                <a href="#news"><img src={AnchorDown} alt="" /></a>
            </section>
        </div>
    );
}

export default Anchor;