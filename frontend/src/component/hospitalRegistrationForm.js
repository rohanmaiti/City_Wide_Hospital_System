import React from "react";
import { useState ,useRef} from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import styles from "../css/hospitalRegistrationForm.module.css";
import { Checkmark } from "react-checkmark";
// import { SunspotLoader } from "react-awesome-loaders";
import {OrbitProgress} from "react-loading-indicators";
import axios from "axios";
import Swal from "sweetalert2";

const HospitalRegistrationForm = () => {
  const [hospital_details, setHospitalDetails] = useState({
    hospital_applicant_name: "",
    hospital_name: "",
    identity_type: "",
    identity_card: "",
    hospital_contact_number: "",
    hospital_email: "",
    hospital_pincode: "",
    hospital_address: "",
    hospital_photoes: "",
  });

  const [imageLinks, setImageLinks] = useState({
    identity_card: "",
    hospital_photoes: [],
  });

  const [loading,setLoading] = useState(false);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 3) {
      Swal.fire("More than 3 Images are not allowed");
      return;
    }
    setHospitalDetails({
      ...hospital_details,
      [e.target.name]: e.target.files,
    });

    if (e.target.name == "identity_card") {
        let src = URL.createObjectURL(e.target.files[0]);
        setImageLinks({...imageLinks,"identity_card":src});
    } 
    else {
        let arr = [];
        for(let i=0;i<e.target.files.length;i++){
          let src = URL.createObjectURL(e.target.files[i]);
          arr.push(src);
        }
        setImageLinks({...imageLinks,"hospital_photoes":arr})
    }
  };

  const handleChange = (e) => {
    setHospitalDetails({
      ...hospital_details,
      [e.target.name]: e.target.value,
    });
  };

  function reset() {
    setHospitalDetails({
      hospital_applicant_name: "",
      hospital_name: "",
      identity_type: "",
      identity_card: "",
      hospital_contact_number: "",
      hospital_email: "",
      hospital_pincode: "",
      hospital_address: "",
      hospital_photoes: "",
    });

    setImageLinks({
      identity_card: "",
      hospital_photoes: "",
    });
  }

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    reset();
    let formData = new FormData();
    for (let key in hospital_details) {
      if (key == "identity_card")
        formData.append(key, hospital_details[key][0]);
      else if (key == "hospital_photoes") {
        for (let i = 0; i < hospital_details.hospital_photoes.length; i++) {
          formData.append("hospital_photoes",hospital_details.hospital_photoes[i]);
        }
      }
      else{
        formData.append(key,hospital_details[key]);
      }
    }
    // console.log("formData", formData);
    try {
      let response = await axios.post("http://localhost:4000/applyForHospital",formData);

      console.log(response.data);
      Swal.fire({
        title: "Successfully Applied for Hospital Registration!",
        text: "Your account will be created after the varification",
        icon: "success"
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.msg,
        text: "You will have mail onece varification is Done",
    });
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div>
 {
      loading === true ? <div className={styles.div6} >
       {
       <OrbitProgress color="#32cd32" size="large" text="" textColor=""  />
       }
      </div>
      :<form
      className={styles.container}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <h1 className="pt-3  text-slate-950 text-3xl font-bold">Apply For Hospital </h1>
      <div className={styles.div}>
        <div>
          <label 
            className="float-left pl-1 block text-lg font-medium text-gray-900"
            htmlFor="hospital_admin "
          >
            Applicant's Name{" "}
          </label>
          <input
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            type="text"
            name="hospital_applicant_name"
            id="hospital_admin"
            placeholder="Enter Applicant's Name"
            value={hospital_details.hospital_applicant_name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="float-left pl-1 block text-lg font-medium text-gray-900">
            Enter Hospital Name{" "}
          </label>
          <input
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            type="text"
            name="hospital_name"
            placeholder="Enter Hospital Name"
            value={hospital_details.hospital_name}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.div2}>
        <label className="float-left pl-1 block text-lg font-medium text-gray-900">
          Upload your Identity Card
        </label>
        <select
          className={styles.selectBox}
          name="identity_type"
          value={hospital_details.identity_type}
          onChange={handleChange}
          required
        >
          <option disabled value="" key="">
            --Select type--
          </option>
          <option value="voter card" key="voter card">
            Voter Card
          </option>
          <option value="aadhar card" key="aadhar card">
            Aadhaar Card
          </option>
          <option value="driving license" key="driving license">
            Driving License
          </option>
        </select>

        <input
          type="file"
          name="identity_card"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".jpg, .jpeg, .png, .pdf"
        />
        {imageLinks.identity_card != "" ? (
          <div>
            <Checkmark size="20px" color="green" />{" "}
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className={styles.div3}>
        <div>
          <label className="block text-lg font-medium text-gray-900">
            Contact Number{" "}
          </label>
          <input
            className="block w-200px h-9 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            type="number"
            name="hospital_contact_number"
            placeholder="Enter contact number"
            value={hospital_details.hospital_contact_number}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-900">
            Email Id{" "}
          </label>
          <input
            className="block w-200px h-9 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            type="email"
            name="hospital_email"
            placeholder="Enter email id"
            value={hospital_details.hospital_email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-900">
            {" "}
            Pincode{" "}
          </label>
          <input
            className="block w-200px h-9 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            type="number"
            name="hospital_pincode"
            placeholder="Enter pincode"
            value={hospital_details.hospital_pincode}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.div4}>
        <div>
          <label
            htmlFor="about"
            className="block text-lg font-medium text-gray-900"
          >
            Full address
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              rows={5}
              cols={50}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              placeholder="Type full address of Hospital"
              name="hospital_address"
              value={hospital_details.hospital_address}
              onChange={handleChange}
            />
          </div>
          <p className="mt-1 text-lg text-gray-600">
            Write full address of Hospital.
          </p>
        </div>

        <div className={styles.div5}>
          <label
            htmlFor="cover-photo"
            className="block text-lg font-medium text-gray-900"
          >
            Hospital Photos
          </label>
          <div className="mt-2 w-auto h-32 flex justify-center rounded-lg border border-dashed  border-gray-900/25 px-2 py-6">
            <div className="text-center">
              {imageLinks.hospital_photoes != [] ? (
                <div className="flex gap-2">
                  {imageLinks.hospital_photoes.map((link, index) => {
                    return (
                      <img
                        className="w-16 h-10 border-1 border-slate-700 rounded-sm"
                        src={link}
                        key={index}
                        alt="images"
                      />
                    );
                  })}
                </div>
              ) : (
                <PhotoIcon
                  aria-hidden="true"
                  className="mx-auto size-10 text-gray-300"
                />
              )}

              <div className="mt-4 flex text-sm/6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    onChange={handleFileChange}
                    id="file-upload"
                    name="hospital_photoes"
                    type="file"
                    className={styles.upload}
                    multiple
                    accept=".jpg, .jpeg, .png"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 5MB</p>
            </div>
          </div>
        </div>
      </div>
      
      <button type="submit" className={styles.button}>
        submit
      </button>

      <div className={styles.animated_text}>
        You will receive Credentials after verification
      </div>
    </form>
   }
    </div>
   
    
  );
};
export default HospitalRegistrationForm;
