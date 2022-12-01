import { Link } from "react-router-dom";
import DeleteDonor from "./deleteDonor";
import useFetch from "../useFetch";
import { BsPersonBoundingBox,BsFillPencilFill } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";

const GetAllDonors = () => {
  const { data, loading, error } = useFetch("/api/donors/all");

  return (
    <div className="home">
      
      <h1>ALL DONORS !!</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/donors/Add">
        <div className="new">
          <br/>
          <h1><BsPersonBoundingBox/> &nbsp;&nbsp;<span>Add </span> <span> Donor</span>{" "}</h1>
          
        </div>
      </Link>

      
      {(error.length > 0 && <p>{error} </p>) ||
        (loading && <p> loading ....</p>)}
      {!loading && (
        <div className="abc">
          {data.map((d) => (
            <div key={d.Donor_ID} className="task-preview">
              <h2>{d.Donor_ID}</h2>{" "}
              <div className="delete">
                
                <Link to={`/donors/Update/${d.Donor_ID}`}>
                &nbsp;&nbsp;&nbsp;<button> <BsFillPencilFill/> </button>
                </Link>

                <br />
                <br />
              </div>
              
                <p>{d.Donor_Name},  {d.Email_ID}</p>
                
              
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetAllDonors;
