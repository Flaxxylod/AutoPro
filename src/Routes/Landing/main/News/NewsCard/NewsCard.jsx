import "./newsCard.css"

import Arrow from "./../../../../../assets/main/News/Arrow.svg"
const NewsCard = ({ picture, date, head }) => {
    return (
        <div className="NewsCard-content">
            <div className="NewsCard-picture">
                <img src={picture} alt="" />
            </div>
            <div className="NewsCard-title">
                <section className="NewsCard-title-date">
                    {date}
                </section>
                <section className="NewsCard-title-head">
                    <strong style={{ textTransform: "uppercase", color: "var(--white-color-text)", fontSize: "15px" }}>{head}</strong>
                </section>
                <div className="NewsCard-ArrowButton">
                    <a href="#!"><img src={Arrow} alt="" /></a>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;