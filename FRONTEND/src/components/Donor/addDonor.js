import React from 'react'

function AddDonor() {
  return (
    <div className="add">
      <br/><br/>
        <form action="/api/donors/add"  method='POST'>
            <label >Donor_ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; </label>
            <input type="text" name ="Donor_ID" id ="Donor_ID"></input>
            <br></br><br/>
            <label > Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" name ="Donor_Name" id="Donor_Name" />
            <br/><br/>
            <label > Email ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" name ="Email_ID" id="Email_ID" />
            <br/><br/>
            <label >City &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" name ="City" id="City" />
            <br/><br/>
            <label > Pincode &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" name ="Pincode" id="Pincode" />
            <br/><br/>
            <label > State &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" name ="State" id="State" />
            <br/><br/>
            <button type="submit" onClick={()=>  window.alert("successfully added")}> Add Donor </button>
        </form>
    </div>
  )
}
export default AddDonor;

