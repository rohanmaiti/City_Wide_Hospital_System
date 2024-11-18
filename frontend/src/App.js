import  Login from "./component/login";
import Signup from './component/signup';
import Forgotpassword from './component/forgot';
import HospitalRegistrationForm from './component/hospitalRegistrationForm';
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
      </Routes>
    </Router>

    </>
  );
}

export default App;
