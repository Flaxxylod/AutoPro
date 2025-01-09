import "./main.css"
import DescriptionBycompany from "./Description/DescriptionBycompany";
import Services from "./Services/Services";
const Main = () => {
    return (
        <div className="Main-content">
            <DescriptionBycompany />
            <Services />
        </div>
    );
}

export default Main;