import React, { useEffect } from "react";

import { useState } from "react";

import { useHistory, useParams} from "react-router-dom";
function Updatedonor() {
  const {id} =useParams();
  const [Donor_ID, setDonor_ID] = useState("");
  const [Donor_Name, setDonor_Name] = useState("");
  const [Email_ID, setEmail_ID] = useState("");
  const [City, setCity] = useState("");
  const [Pincode, setPincode] = useState("");
  const [State, setState] = useState("");
  const [createdAt, setcreatedAt] = useState("");
  const history = useHistory();
  useEffect(() => {
    fetch(`http://127.0.0.1:3001/api/donors/one/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setDonor_ID(data.Donor_ID);
        setDonor_Name(data.Donor_Name);
        setEmail_ID(data.Email_ID);
        setCity(data.City);
        setPincode(data.Pincode);
        setState(data.State);
        setcreatedAt(data.createdAt);
      });
  }, []);

  const updateProduct = async (e) => {
    console.log("in update");

    e.preventDefault();
    await fetch(`http://127.0.0.1:3001/api/donors/one/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        Donor_ID:Donor_ID,
        Donor_Name:Donor_Name,
        Email_ID:Email_ID,
        City:City,
        Pincode:Pincode,
        State:State,
        createdAt:createdAt,
        UpdatedAt: "CurrentTime()",
      }),
    })
   history.push('/donors')
  };
  

  return (
    <div className="add">
      <br />
      <br />

      <br></br>

      <form onSubmit={updateProduct}>
        <h3>{Donor_ID}</h3>
        <label> Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          name="Donor_Name"
          id="Donor_Name"
          value={Donor_Name}
          onChange={(e) => setDonor_Name(e.target.value)}
        />
        <br />
        <br />
        <label> Email ID &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          name="Email_ID"
          id="Email_ID"
          value={Email_ID}
          onChange={(e) => setEmail_ID(e.target.value)}
        />
        <br />
        <br />
        <label>City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          name="City"
          id="City"
          value={City}
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <br />
        <label> Pincode&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          name="Pincode"
          id="Pincode"
          value={Pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <br />
        <br />
        <label> State &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          name="State"
          id="State"
          value={State}
          onChange={(e) => setState(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" > Update Donor </button>
      </form>
    </div>
  );
}
export default Updatedonor;
