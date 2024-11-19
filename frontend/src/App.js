import  Login from "./component/login";
import Signup from './component/signup';
import Forgotpassword from './component/forgot';
import HospitalRegistrationForm from './component/hospitalRegistrationForm';
import AdminApprovePage from "./component/adminApprove";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
     
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgotpassword" element={<Forgotpassword/>} />
        <Route path="/applyForHospital" element={<HospitalRegistrationForm/>} />
        <Route path="/adminApprove" element={<AdminApprovePage/>} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
