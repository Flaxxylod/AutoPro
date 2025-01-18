import "./main.css"
import DescriptionBycompany from "./Description/DescriptionBycompany";
import Services from "./Services/Services";
import Bycompany from "./ByCompany/Bycompany";
import News from "./News/News";
import CompaniesIcon from "./CompaniesSlider/CompaniesSlider"
const Main = () => {
    return (
        <div className="Main-content">
            <DescriptionBycompany />
            <Services />
            <Bycompany />
            <News />
            <CompaniesIcon />
        </div>
    );
}

export default Main;