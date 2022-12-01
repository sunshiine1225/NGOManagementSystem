
import { Link } from "react-router-dom";
import Dlt from "../components/Donor/deleteDonor";
import useFetch from "../components/useFetch";
import { FcBusinessman } from 'react-icons/fc';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillPeopleFill,BsFillGeoAltFill,BsFillFilePlusFill} from 'react-icons/bs';



const Home = () => {



  return (
    <div className="home">
        <br>
        </br>
        <br></br>
        <br/>
        <p>
        <Link to ="/donors"><div>
            
            <h><FcBusinessman/> <span>Donors</span> </h></div></Link></p>
<br></br>
<br/><br/>
            <Link to ="/donations"><div>
            
            <h> <BsFillFilePlusFill/><span>    Donations</span> </h></div></Link>
            <br>
            </br>
            
            <Link to ="/events">
            <br></br>
            <h><BsFillGeoAltFill/> <h><span>Events</span></h> </h></Link>
            
        <br></br>
        <br/>
        <br/>
        <br/>
        <p>
        <Link to ="/volunteers"><div>
            
            <h><BsFillPeopleFill/> <span>Volunteers</span> </h></div></Link></p>
           </div>
  );
};

export default Home;
