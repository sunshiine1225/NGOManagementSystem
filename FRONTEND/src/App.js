
import "./App.css";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./Screens/HomeScreen";
import GetAllDonations from "./components/Donation/getAllDonations";
import AddDonation from "./components/Donation/addDonation";
import UpdateDonation from "./components/Donation/updateDonations";
import DeleteDonation from "./components/Donation/deleteDonation";
import UpdateDonors from "./components/Donor/updateDonor";
import GetAllDonors from "./components/Donor/getAllDonors";
import AddDonor from "./components/Donor/addDonor";
function App() {
  

  return (
    <div className="App">
      
      <Navbar/>
      <Router>
      
      <Switch>
        
        <Route exact  path="/">
        <Home/>
        </Route>
        <Route exact  path="/donations">
        <GetAllDonations/>
        </Route>
        <Route exact  path="/donations/add">
        <AddDonation/>
        </Route>
        <Route exact  path="/donations/Update/:id">
        <UpdateDonation/>
        </Route>
        <Route exact  path="/donations/Delete/:id">
        <DeleteDonation/>
        </Route>
        <Route exact  path="/donors">
        <GetAllDonors/>
        </Route>
        <Route exact  path="/donors/add">
        <AddDonor/>
        </Route>
        <Route exact  path="/donors/Update/:id">
        <UpdateDonors/>
        </Route>
        
        
      
      </Switch>
      </Router>
    </div>
  );
}

export default App;
