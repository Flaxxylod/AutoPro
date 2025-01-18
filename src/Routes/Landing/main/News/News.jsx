import "./news.css"
import NewsCard from "./NewsCard/NewsCard";
import { NewsData } from "./DataNewcCard";
import Button from "./../../../../Elements/button/Button"
const News = () => {

    const NewsCards = NewsData.map((obj) =>
        <NewsCard picture={obj.picture} date={obj.date} head={obj.head} key={obj.id} />
    )

    return (
        <div id="news" className="news-content">
            <div className="container">
                <div className="news-titleBlock">
                    <h2>Новости</h2>
                </div>
            </div>
            <div className="news-mainBlock">
                {NewsCards}
            </div>
            <div style={{display:"flex", justifyContent:"center", marginTop:"72px"}}>
                <Button size={"higher"} color={"orange"}>Читать все новости</Button>
            </div>
        </div>
    );
}

export default News;