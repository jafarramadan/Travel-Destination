
import './Tours.css';

function Tours(props) {
    return (
        <div className="tours-container">
            <h2>{props.tourName}</h2>
            <img src={props.tourImage} alt="tour image" />
        </div>
    );
}

export default Tours;
