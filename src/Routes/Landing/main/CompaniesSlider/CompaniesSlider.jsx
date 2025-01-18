import Flickity from "react-flickity-component";
import "./companiesSlider.css"
import "./../../../../../src/styles/Slider.css"
import { PictureSlider } from "./CompaniesIcon/SliderData";
const flickityOptions = {
    initialIndex: 2
}


const CompaniesSlider = () => {
    return (
        <div className="CompaniesSlider-content">
            <Flickity
                className="Slider"
                elementType="div"
                disableImagesLoaded={false}
                options={flickityOptions}
                reloadOnUpdate
                static
            >
                {
                    PictureSlider.map((obj) =>
                        <div key={obj.id} className="Plate">
                            <>
                                <img src={obj.picture} alt="" />
                            </>
                        </div>
                    )
                }
            </Flickity>
        </div>);
}

export default CompaniesSlider;