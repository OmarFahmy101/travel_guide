import { FaLocationDot } from "react-icons/fa6";
const Cards = (props) => {
    return (
        <>
            <div className="cardContent">
                <img src={props.image} className="mountainPic" alt="mountain"></img>
                <div>
                    <div className="firstDiv">
                        <FaLocationDot className="locationDot" />

                        <h1 className="Japan"> {props.country} </h1>
                        <p className="link">
                            <a href={props.link}>view on google maps</a></p>
                    </div>
                    <div className="secondDiv">
                        <h1 className="headerTwo">{props.monument}</h1>
                        <p className="date">{props.date}</p>


                        <p className="paragraph">{props.paragraph1}<br></br>{props.paragraph2}<br></br>{props.paragraph3}</p>
                    </div>
                </div>

            </div >
            <hr className="Line"></hr>
        </>
    )
}

export default Cards
