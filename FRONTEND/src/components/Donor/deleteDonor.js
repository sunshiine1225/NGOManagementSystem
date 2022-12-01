//import React from 'react'

import { useHistory } from "react-router-dom";

function DeleteDonor(id) {
  
  console.log("in delete")
  fetch(`/api/donors/delete/${id}`,{method : "DELETE"})
  
  
    
}
export default DeleteDonor;