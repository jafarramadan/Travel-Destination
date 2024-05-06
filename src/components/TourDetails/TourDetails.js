import Header from "../header/Header"
import Footer from "../footer/Footer"
import { useParams } from "react-router-dom"
import './TourDetails.css'; 
import { useState } from "react";


const tourData = require('../../data/db.json');



function TourDetails() {

    const { id } = useParams();
    const selectTour = tourData.find(e => e.id === id);
    const { name, info, image, price } = selectTour;

//=================

const [fullDesc,setFullDesk]=useState(false);

const readDesk=()=>{
    setFullDesk(!fullDesc)
}




//=================


    return (
        <>
            <Header />
            <div className="tour-details-container">
    <h2 className="tour-name"> {name}</h2> 
    <img className="tour-image" src={image} alt={name} />
    <p className="tour-info">{fullDesc ? info : `${info.substring(0,120)}...`} </p>
    <button className="tour-details-button" onClick={readDesk}> {fullDesc ? "see less " : "see more "} </button>
    

    <p className="tour-price">Price: {price}</p>
</div>




            <Footer />
        </>
    )
}



export default TourDetails;






