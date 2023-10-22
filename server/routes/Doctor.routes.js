const DoctorController=require("../controllers/doctor.controllers")

module.exports=(app)=>{
    app.get("/doctors",DoctorController.getAllDoctors)
    app.get("/doctors/:id",DoctorController.getSingleUser)
    app.post("/doctor/new",DoctorController.createUser)
    app.patch("/doctor/edit/:id",DoctorController.updateUser)
    app.delete("/doctor/delete/:id",DoctorController.deleteUser)
}