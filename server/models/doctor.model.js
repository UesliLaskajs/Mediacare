const mongoose=require("mongoose")

const DoctorSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:[true,"Please add a Full Name"]
    },
    speciality:{
        type: String ,
        required : [ true ,"please provide your Specialization"]
    },
    total_patients:{
        type:Number,
        required:[true,'Patient numbers is Required']

    },
    profile_photo:{
        type:String,
        required:[true,'Image Url is Required']
    },
    description:{
        type:String,
        required:[true,'Please tell us something about yourself']
    },
    schooling:{
        type:String,
        required:[true,'Please add Education']
    },
    feedback:{
        type:String
    },
    hospital:{
        type:String,
        required:[true,'Please add a Phrase']
    },
    booked:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

module.exports=mongoose.model('doctors',DoctorSchema)