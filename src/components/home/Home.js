import Header from "../header/Header.js"
import Footer from "../footer/Footer.js"
import Tours from "../tours/Tours.js";

const tourData=require('../../data/db.json')

function Home(){
    return(
        <>
        <Header/>

            {
                tourData.map(e=>{
                    return(
                        <Tours tourName={e.name} tourImage={e.image}/>
                    )
                })
            }

        <Footer/>
        </>
    )
}

export default Home;