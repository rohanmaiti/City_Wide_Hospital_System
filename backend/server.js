const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const app = express();
app.listen(4000,()=>{
    console.log("server runnings at 4000");
})
// const uri = "mongodb+srv://rohan:rohan123@cluster0.qzw60o2.mongodb.net/hospital_batabase?retryWrites=true&w=majority&appName=Cluster0";
const uri2 = "mongodb+srv://rohan:rohan123@cluster0.qzw60o2.mongodb.net/hospital_batabase?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(uri2)   
.then(()=>console.log("mongoose connected"))
.catch((err)=>console.log("Error connectiong to database",err))
const User = require("./models/users");
const Hospital = require("./models/hospital");

app.use(express.json());
app.use(express.urlencoded()); 
app.use(cors());
app.use('/hospital_Images', express.static('hospital_Images'));

const uploadCounts = {};
const storage = multer.diskStorage({
    destination : (req,file, cb)=>{
        // console.log("destination file",file);
        if(file.fieldname == "hospital_photoes")
        cb(null,"./hospital_Images");
        else {
        cb(null,"./identity__Card_Proof");
        }
    }
    ,
    filename:(req,file,cb)=>{
    const hospitalName = req.body.hospital_name;
    if (!uploadCounts[hospitalName]) {
      uploadCounts[hospitalName] = 0; // Initialize count if not set
    }
    uploadCounts[hospitalName] += 1; // Increment the count
    const fileNumber = uploadCounts[hospitalName];
    const extension = file.originalname.split('.').pop();
    const fileName = `${hospitalName}_${fileNumber}.${extension}`;
    if(file.fieldname == "hospital_photoes")
    cb(null, fileName);
    else{
    cb(null,req.body.hospital_name +"_"+req.body.hospital_applicant_name+ path.extname(file.originalname));
    }
    }
})
const upload = multer({
    storage:storage,
});

app.post("/signup",async (req,res)=>{
    console.log(req.body);
    try {
        let user = await User.findOne({email:req.body.email});
        let userWithsameNumber = await User.findOne({number:req.body.number});
        if(user != null || userWithsameNumber != null){
            throw new Error("User already exist")
        }
        let newUser = new User(req.body);
        await newUser.save();
        res.status(200).json({msg:"sucessfull signup"});
    } catch (error) {
        res.status(500).json({msg:error.message});
    }   
}) 

app.post("/forgotpassword",async (req,res)=>{
    console.log("printing body",req.body);
    try {
        let user =await User.findOneAndUpdate(
            { email:req.body.email },
            {$set:{password:req.body.password}},
        )
        console.log("Find user = ,",user);
        if(user != null){
            console.log("After update ",user);
            res.status(200).json({status:true,msg:"sucessfully changed the password"});
        }
        else{identity_card
            throw new Error("You do not have account on this email id");
        }
    } catch (error) {
        res.status(500).json({status:false,msg:error.message});
    }
})


app.post("/applyForHospital",upload.fields([{ name: 'identity_card' }, { name: 'hospital_photoes', maxCount: 3 }]),async (req,res)=>{
    try {
        console.log(req.body);
        console.log(req.files);
        let email = await Hospital.findOne({hospital_email:req.body.hospital_email});
        let contact = await Hospital.findOne({hospital_contact_number:req.body.hospital_contact_number});
        if( email != null || email != null){
            throw new Error("Email Id or Phone Number Already Applied");
        }
        else{          
            let obj = req.body;
            obj.identity_card = req.files["identity_card"] ;
            obj.hospital_photoes = req.files["hospital_photoes"];
            let newHospital = new Hospital(obj);
            await newHospital.save();
            res.status(201).json({msg:"Sucessfully applied"})
        } 

    } catch (error) {
            res.status(401).json({msg:error.message})
    }
    
}) 

app.get("/getHospitals",async (req,res)=>{
    let hospitals = await Hospital.find({});
    console.log(hospitals);
    res.json({hospitals:hospitals});
})