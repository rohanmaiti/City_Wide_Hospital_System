import  Login from "./component/login";
import Signup from './component/signup';
import Forgotpassword from './component/forgot';
import HospitalRegistrationForm from './component/hospitalRegistrationForm';
import AdminApprovePage from "./component/adminApprove";
import HospitalDetails from "./component/hospitalDetails";
import CardWithSlider from "./component/slidingImageComp";
import NavBar from "./component/navBar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgotpassword" element={<Forgotpassword/>} />
        <Route path="/applyForHospital" element={<HospitalRegistrationForm/>} />
        <Route path="/adminapprove" element={<AdminApprovePage/>} />
        <Route path="/hospitalDetails" element={ <HospitalDetails/>} />
       
      </Routes>
    </Router>
    {/* <CardWithSlider/> */}
    </>
  );
}

export default App;
