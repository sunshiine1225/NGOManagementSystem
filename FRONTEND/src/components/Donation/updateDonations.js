import React, { useEffect } from "react";

import { useState } from "react";

import { useHistory, useParams} from "react-router-dom";
function UpdateDonation() {
  const {id}= useParams();
  const [Donor_ID, setDonor_ID] = useState("");
  const [Transaction_ID, setTransaction_ID] = useState("");
  const [Transaction_Type, setTransaction_Type] = useState("");
  const [Donation_Amt, setDonation_Amt]=useState();
  const [Verifier_ID,setVerifier_ID] = useState();
  const [createdAt, setcreatedAt] = useState("");
  const history = useHistory();
  useEffect(() => {
    fetch(`http://127.0.0.1:3001/api/donations/one/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setDonor_ID(data.Donor_ID);
        setTransaction_ID(data.Transaction_ID);
        setTransaction_Type(data.Transaction_Type);
        setDonation_Amt(data.Donation_Amt);
        setVerifier_ID(data.Verifier_ID);
        setcreatedAt(data.createdAt);
      });
  }, []);

  const updateProduct = async (e) => {
    console.log("in update");

    e.preventDefault();
    await fetch(`http://127.0.0.1:3001/api/donations/one/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        Donor_ID:Donor_ID,
        Transaction_ID,
        Transaction_Type,
        Donation_Amt,
        Date:"CurrentTime()",
        Verifier_ID,
        createdAt:createdAt,
        UpdatedAt: "CurrentTime()",
      }),
    })
   history.push('/donations')
  };
  

  return (
    <div className="add">
      <br />
      <br />

      <br></br>

      <form onSubmit={updateProduct}>
          
            <label >Transaction_Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; </label>
            <input type="text" name ="Transaction_Type" id ="Transaction_Type" onChange={(e) => setTransaction_Type(e.target.value)}></input>
            <br></br><br/>
            <label >Donor_ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; </label>
            <input type="text" name ="Donor_ID" id ="Donor_ID" onChange={(e) => setDonor_ID(e.target.value)}></input>
            <br></br><br/>
            <label > Donation_Amt &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" name ="Donation_Amt" id="Donation_Amt" onChange={(e) => setDonation_Amt(e.target.value)} />
            <br/><br/>
            <label > Verifier ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" name ="Verifier_ID" id="Verifier_ID" onChange={(e) => setVerifier_ID(e.target.value)} />
            <br/><br/>
            
            <button type="submit">     Update           </button>
        
      </form>
    </div>
  );
}
export default UpdateDonation;
