// import { Link } from "react-router-dom";
const DoctorDetails = (prop) => {
    const { doctor } = prop;

    return (
        <div className="w-[30%] flex flex-col justify-center items-center">
            <div className="doctors_image">
                <img src={doctor.photo} alt={name} /> 
            </div>
            <div className="flex w-[100%] justify-start">
                <h1 className="text-[1.5rem]">{doctor.name}</h1>
            </div>
            <div className="ratings w-[100%] flex justify-between items-center">
                <div className="w-[100px] border-[1px] flex items-center bg-emerald-500 rounded-[15px] ">
                    <p >{doctor.specialty}</p>
                </div>
                <p>Average Rating: {doctor.avgRating}</p>
            </div>
            <div className="flex w-[100%] justify-start">
                <p>Total Rating: {doctor.totalRating}</p>
            </div>

            <div className="flex w-[100%] justify-start">
                <p>Total Patients: {doctor.totalPatients}</p>
            </div>


            <p className="text_para">Hospital: {doctor.hospital}</p>
            {/* <Link to={'/doctors'}>
            <div className="btn">
                Visit
            </div>
            </Link> */}
            
        </div>
    );
}

export default DoctorDetails;
