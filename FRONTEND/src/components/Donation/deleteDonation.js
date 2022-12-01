function DltDonation(id) {
    fetch(`/api/donations/delete/${id}`,{method : "DELETE"})
    .then(()=> {console.log("del done")
          })
    
      
  }
  export default DltDonation;