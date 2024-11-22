import  Login from "./component/login";
import Signup from './component/signup';
import Forgotpassword from './component/forgot';
import HospitalRegistrationForm from './component/hospitalRegistrationForm';
import AdminApprovePage from "./component/adminApprove";
import HospitalDetails from "./component/hospitalDetails";
import CardWithSlider from "./component/slidingImageComp";
import UserDashboard from "./component/UserDashboard";
import Landingpage from "./component/Landingpage";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgotpassword" element={<Forgotpassword/>} />
        <Route path="/applyForHospital" element={<HospitalRegistrationForm/>} />
        <Route path="/adminapprove" element={<AdminApprovePage/>} />
        <Route path="/hospitalDetails" element={ <HospitalDetails/>} />
        <Route path="/userdashboard" element={<UserDashboard/>} />
       
      </Routes>
    </Router>
    {/* <CardWithSlider/> */}
    </>
  );
}

export default App;
