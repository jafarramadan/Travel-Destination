import { Link } from "react-router-dom";

import './Navbar.css'; 

function Navbar(){
    return(
       <nav>
       <button className="tour-details-button2" > <Link to="/">Home</Link> </button>
       </nav>
    )
}
export default Navbar;