import Tour from '../tours/tour/Tour.js';
import './Tours.css';
const tourData = require('../../data/db.json')



function Tours() {
    return (
        <div >
            {
                tourData.map(e => {
                    return (
                        <Tour id={e.id} tourName={e.name} tourImage={e.image} />
                    )
                })
            }


        </div>
    );
}

export default Tours;
