import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import { BsFillPlusSquareFill,BsFillPencilFill } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import DltDonation from "./deleteDonation";



const GetAllDonations = () => {
  const { data, loading, error } = useFetch("/api/donations/all");

  return (
    <div className="home">
      <h1>All Donations !!</h1>
      
      <Link to="/donations/Add">
        <div className="new">
          <h1>
            <BsFillPlusSquareFill/> <span>Add</span>{" "}
          </h1>
        </div>
      </Link>

      <br />
      <br />
      {(error.length > 0 && <p>{error} </p>) ||
        (loading && <p> loading ....</p>)}
      {!loading && (
        <div className="abc">
          {data.map((d) => (
            <div key={d.Transaction_ID} className="task-preview">
              <h2>{d.Transaction_ID}</h2>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="delete">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  id={d.Transaction_ID}
                  onClick={(e) => {
                    DltDonation(e.target.id);
                  }}
                >
                  <AiTwotoneDelete />
                </button>
                &nbsp;&nbsp;&nbsp;
                <Link to ={`/donations/Update/${d.Transaction_ID}`}>
             <button> <BsFillPencilFill/> </button> 
              </Link>
                

                <br />
                <br />
              </div>
              <p>
                <p>{d.Transaction_Type}</p>
                <p>{d.Donor_ID}</p>
                
              </p>
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
    )
}

export default GetAllDonations;
