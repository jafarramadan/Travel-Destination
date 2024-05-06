import { Link } from "react-router-dom";


function Tour(props) {
    return (
        <div className="tours-container">
            <Link to={`/city/${props.id}`}>

                <h2>{props.tourName}</h2>
                <img src={props.tourImage} alt="tour image" />

            </Link>
        </div>
    )
}


export default Tour;