
import { Link } from "react-router-dom";
import Dlt from "../components/Donor/deleteDonor";
import useFetch from "../useFetch";
import { BiBookAdd } from 'react-icons/bi';
import { AiTwotoneDelete } from 'react-icons/ai';


const Home = () => {

const {data,loading,error} = useFetch("/api/donors/all");

  return (
    <div className="home">
        <div className="title-h">
        </div>
        <Link to ="/donors/Add"><div className="new">
            
            <h><BiBookAdd/> <span>Add</span> </h></div></Link>
        
        <br/><br/>
      {(error.length > 0 && <p>{error} </p>) ||
        (loading && <p> loading ....</p>)}
      {!loading && (
        <div className="abc">
          {data.map((d) => (
            <div key={d.Donor_ID} className="task-preview">
              
              <h2>{d.Donor_Name}</h2> <div className="delete"><button
                id={d.Donor_ID}
                onClick={(e) => {
                  Dlt(e.target.id);
                }}
              >
                <AiTwotoneDelete/>
              </button> 
              <Link to ={`/donors/Update/${d.Donor_ID}`}>
             <button> Update </button> 
              </Link>
        
        <br/><br/>
            
              </div><p>{d.Email_ID}{d.Donor_ID}</p>
              
              
              <br />
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
