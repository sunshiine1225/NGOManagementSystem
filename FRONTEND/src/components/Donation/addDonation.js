import React from 'react'
import { useHistory } from 'react-router-dom';
import { BiArrowFromBottom } from "react-icons/bi";
function AddDonation() {
    const history = useHistory();
    
  return (
    <div className="add">
      <br/><br/>
        <form action="/api/donations/add"  method='POST'>
            <label >Transaction_ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; </label>
            <input type="text" name ="Transaction_ID" id ="Transaction_ID"></input>
            <br></br><br/>
            <label >Transaction_Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; </label>
            <input type="text" name ="Transaction_Type" id ="Transaction_Type"></input>
            <br></br><br/>
            <label >Donor_ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; </label>
            <input type="text" name ="Donor_ID" id ="Donor_ID"></input>
            <br></br><br/>
            <label > Donation_Amt &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" name ="Donation_Amt" id="Donation_Amt" />
            <br/><br/>
            <label > Verifier ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" name ="Verifier_ID" id="Verifier_ID" />
            <br/><br/>
            
            <button type="submit" onClick={()=>  window.alert("successfully added")}> <BiArrowFromBottom/> Donation Details </button>
        </form>
        
    </div>
  )
}
export default AddDonation;
