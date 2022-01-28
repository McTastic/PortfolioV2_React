import "../../css/home.css"
import FireGIF from "../../images/campfire-pixel.gif";

const Home = () => {
    return (
        <div className="greeting">
            <h1>Greetings!<br/><br/>Stay Awhile!</h1>
            <img src={FireGIF}/>
        </div>
    )
}

export default Home;