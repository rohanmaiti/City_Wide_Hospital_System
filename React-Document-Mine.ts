//sending data from react to server :
/*
// # using fetch
var sendDataToServer = () => {
  fetch('http://localhost:5000/api/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'John', age: 30 }), // Data being sent
  })
    .then(response => response.text())
    .then(data => console.log(data)) // Logs the response from the server
    .catch(error => console.error('Error:', error));
};

// # using axios
import axios from 'axios';
var sendDataToServer = () => {
  axios.post('http://localhost:5000/api/data', {
    name: 'John',
    age: 30, // Data being sent
  })
    .then(response => {
      console.log(response.data); // do not have to parse the response, automatically it does parse it and store it in data key of response obj
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
*/

/**
 * 
 ** In React, the <Link> component from react-router-dom is used to create navigation links that
 *  allow users to navigate between routes without refreshing the page. 
 *  This helps maintain a single-page application (SPA) experience.
 *  Here's how to use <Link> to hit routes in React:

** 1. Basic Usage of <Link>:
The <Link> component is used instead of the standard <a> tag to enable client-side navigation.

javascript
Copy code
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
** 2. Setting Up Routes:
Ensure that you have routes defined using <Route> components within a <Routes> component.

javascript
Copy code
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

** How It Works:
The <Link> component updates the URL in the browser's address bar without refreshing the page.
The to prop defines the target path for the navigation.
React Router handles the client-side routing, rendering the appropriate component for the route.
Benefits of Using <Link>:
SPA Behavior: Provides client-side navigation that is faster and smoother compared to traditional full-page reloads.
Preserves State: Maintains the application state between route transitions.
By using <Link> instead of <a> tags, React Router ensures that navigation is handled within the app without triggering full-page reloads, enhancing performance and user experience.
 */

/**
 ** In a React functional component, there is an important difference between using an <a> tag and a <Link> component from react-router-dom for navigation:

 ** 1. <a> Tag:
Default Behavior: The <a> tag triggers a full-page reload when clicked. This means the browser sends a new HTTP request to the server to fetch the new page, causing the entire page to reload.
Drawbacks: This breaks the
** Single Page Application (SPA) **
behavior because it refreshes the entire page, potentially losing state and making navigation slower.
 ** 2. <Link> Component from react-router-dom:
SPA Navigation: The <Link> component allows for client-side navigation without triggering a full-page reload. It updates the URL and renders the corresponding component seamlessly without refreshing the page.
Preserves State: It ensures that the React application maintains its state and context during navigation.
Better Performance: Navigation is faster and smoother because it avoids reloading the entire page and just updates the relevant React components.
 */

/**
 * * TO manually redirect to a new route we use , useNavigate and useLocation
 * * we have to import those and make instances of those 
 * * import {useNavigate , useLocaiton} from "react-router-dom"
 * * const navigate = useNavigate(); // to redict to new route with maintaining SPA and also send data with this;
 * * const location = useLocation(); // to retrive the data to that perticular route;
 * * navigate("/aboutpage",{state:{name:"xyz",age:21}});
 * * console.log(location.state); // on that perticular route page 
 * 
 * 
 ** long document 
 
 In React, useNavigate is a hook provided by react-router-dom that allows you to programmatically navigate between routes in a functional component. It replaces the older useHistory hook and is used to push or replace the current route in the navigation stack.

How useNavigate Works:
useNavigate returns a function that you can call to change the route programmatically.
This function can be used to navigate to a different route or redirect the user when an event (such as a button click) occurs.
Basic Usage:
jsx
Copy code
* * import { useNavigate } from 'react-router-dom';

function MyComponent() {
  ** const navigate = useNavigate();

  const handleNavigation = () => {
    // Navigates to the '/about' page
    ** navigate('/about');
  };

  return (
    <div>
      <button onClick={handleNavigation}>Go to About Page</button>
    </div>
  );
}
Parameters:
navigate(path, options):
path: The path to navigate to (e.g., /about, /home, etc.).
options: An object to customize navigation behavior:
replace: true: Replaces the current entry in the history stack instead of adding a new one (similar to history.replace()).
state: Allows you to pass state to the new route, accessible via location.state.
Example with replace and state:
jsx
Copy code
** navigate('/profile', { replace: true, state: { fromDashboard: true } });
replace: true makes sure the navigation doesn't push a new entry onto the stack but replaces the current one.
state allows data to be passed to the destination route.
Accessing State in the Target Component:
If you pass state with navigate, you can access it in the target component using the useLocation hook:
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  console.log(location.state); // { fromDashboard: true }

  return <div>Profile Page</div>;
}
Summary:
useNavigate provides a simple and effective way to handle navigation in React functional components.
It helps maintain the SPA behavior by enabling navigation without a page reload.
 * 
 */

// ** ABOUT Swal **
/**
 * * didOpen: This function runs right after the alert is displayed on the screen.
 * * example-
 *  Swal.fire({
                icon: "error",
                title: err.response.data.msg,
                text: "login to your account",
**              footer: '<p id="forgot-password-link" style="cursor: pointer; color: blue; text-decoration: underline;">Forgot password?</p>',
**              didOpen: () => {
**                  document.getElementById('forgot-password-link').addEventListener('click', handleForgotPassword);
**              }
              });
 * * what if i want afer clicking ok button the navigation should start ?
     If you want the navigation to occur after the user clicks the "OK" button on the SweetAlert2 modal, can use the then method or the willClose callback. Here's how to do it:

          Swal.fire({
          title: response.data.msg,
          text: "You can login with your new password",
          icon: "success"
    **    }).then(() => {
    **    navigate("/"); // This will run after the OK button is clicked
    **    });

    ** OR
          Swal.fire({
          title: response.data.msg,
          text: "You can login with your new password",
          icon: "success",
**        willClose: () => {
**        navigate("/"); // This will run right before the modal closes
**        }
**        });

 */

// ** When write select and option learned to use disabled attribute : use for default view of option tags
// ** example -
/** 
 *  <select className={styles.selectBox} name="identity_type"  >
**              <option  value="" key="" disabled>--Select type--</option>
                <option value="voter card" key="voter card">Voter Card</option>
                <option value="aadhar card" key="aadhar card">Aadhaar Card</option>
                <option value="driving license" key="driving license">Driving License</option>
             </select>
 */



// ** How to handle input type file in react and send it to the server
/*
*  *Normally how we store variable data using useState({})
    const [data,setData] = useState({key1:"", key2:"", ...})
    fn(e){
*   setData({...data,[e.target.name]:e.target.value});
    }
*   but for input type file we have to make individual function like this
    function handleFile(e){
*   setData({...data,[e.target.name]:e.target.files})
    }

*   e.target.files is a FileList object, which is similar to an array but not exactly an array.
    e.target.files = FileList {0: File, length: 1}  
    if it is multiple file then 
    e.target.files = FileList {0: File, 1: File, 2: File, length: 3}
*   can access individual files using an index, like e.target.files[0]
    
*   To generate link of the files for display purpose we have two method 
*       MOST USEFULL METHOD
*   1.   URL.createObjectURL(file);
*       ex-
        let arr = [];
        for(let i=0;i<e.target.files.length;i++){
        let file = e.target.files[i];
        let src = URL.createObjectURL(file);
        arr.push(src);
        }
        setLink(arr);
*   2. FileReader()  for signle file 
        fn(e){
             const reader = new FileReader();
             reader.onloadend = ()=>{
               setImageLinks({...imageLinks,[e.target.name]:reader.result});
             }
             reader.readAsDataURL(files[0]); 
        }   
*       FileReader() for multiple file 
        fn(){
            const arr = [];
            const promises = Array.from(files).map((file) => {
              return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                  arr.push(reader.result);
                  resolve();
                };
                reader.readAsDataURL(file);
                });
              });

            Promise.all(promises).then(() => {
            setImageLinks({ ...imageLinks, [e.target.name]: arr });
            });
        }

*     Now Sending Data From react to Server if there is a file 
*     we have to use FormData instance;    
      const data = {
      name: "xyz",
      age: "21",
      image: e.target.image.files,  // Assuming that input feild  name attribute is 'image'
      images: e.target.images.files // Assuming that input feild  name attribute is 'images'
      };
      
      fun(data){
*     const formData = new FormData();
*     ** //formData.append("key",value)
      formData.append(name,data.name);
      formData.append(age,data.age);
*     formData.append(image,data.image[0]); // have to set the main file
     ** //for input type multiple 
*     for(let i=0;i<data.images.length;i++)
*     formData.append(images,data.images[i]);  // setting multiple file for one input tag 

      let response = axios.post("http://localhost:4000/endPoint",formData);
      ** //on server side have to handle using multer as in express js
      }

      

*    // Learned How we can reset the value of input type file after submitting 
*      Usign useRef() hook
*      import {useRef} from "react";
*      export function (){
*      const fileInputRef = useRef(null)
*      
*      function handleSubmit(e){
         /// rest of the code 

*        if (fileInputRef.current) {
*        fileInputRef.current.value = "";
*        }
       }
       return (
       <input type="file"
       name="image"
*      ref={fileInputRef}
       onChange={handleFileChange}
       accept=".jpg, .jpeg, .png, .pdf"
       />
       )
*      }

* How fileInputRef Works:
* Initialization:

When you create fileInputRef using useRef(null), it initially points to null.
At this point, it is just an empty reference with no connection to any DOM element.
javascript
Copy code
const fileInputRef = useRef(null); // Starts as null
Ref Attachment:

When the <input> element renders and ref={fileInputRef} is applied, React attaches the actual DOM element to fileInputRef.current.
Now, fileInputRef.current holds the reference to the <input> element in the DOM.
javascript
Copy code
<input
  type="file"
  ref={fileInputRef} // React attaches this input to fileInputRef.current
/>
File Selection:

When you select a file, the value of the <input> element is updated to show the selected file's name (e.g., example.jpg).
However, this value is not directly reflected in fileInputRef.current—instead, the fileInputRef remains connected to the input element.
What happens here:

fileInputRef.current is still pointing to the input element itself.
You can interact with its properties, like fileInputRef.current.value, fileInputRef.current.files, etc.
Resetting the Input:

After submission, you clear the file input by setting fileInputRef.current.value to an empty string ("").
This effectively resets the file input to its initial state.
javascript
Copy code
if (fileInputRef.current) {
  fileInputRef.current.value = ""; // Clear the input
}
Why Not Assign null?
If you assign null to fileInputRef.current, it breaks the connection between the fileInputRef and the DOM element.
Instead, setting fileInputRef.current.value = "" only resets the value of the input element while keeping the reference intact.
Visual Flow of fileInputRef:
Initial State:

fileInputRef.current = null
After Render:

fileInputRef.current points to the file input DOM element.
File Selection:

fileInputRef.current.files contains the selected files.
After Reset:

fileInputRef.current.value = "" clears the file input field without breaking the reference.


* Learned about react loader animation , will have to install a dependency and can directly use it 
  learned form react loading indicator 
        
 */
