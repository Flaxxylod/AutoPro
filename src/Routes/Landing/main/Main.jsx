import "./main.css"
import DescriptionBycompany from "./Description/DescriptionBycompany";
import Services from "./Services/Services";
import Bycompany from "./ByCompany/Bycompany";
const Main = () => {
    return (
        <div className="Main-content">
            <DescriptionBycompany />
            <Services />
            <Bycompany/>
        </div>
    );
}

export default Main;