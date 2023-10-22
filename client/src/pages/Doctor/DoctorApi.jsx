import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
const DoctorApi = () => {
    const [doctors, setDoctors] = useState([]);
  
    useEffect(() => {
        axios.get("http://localhost:3000/doctors")
            .then((res) => {
                console.log(res.data);
                setDoctors(res.data);
            })
            .catch((err) => {
                console.log("Error getting data doctors", err);
            });
    }, []);

    return (
        <section>
            <div className="container">
                <div className='flex flex-row flex-wrap justify-between items-center'>
                    {doctors.map((item, index) => (
                        <div key={index} className="w-[30%] flex flex-col justify-center items-center">
                            <div className="doctors_image">
                                <img className="w-[330px] h-[330px] rounded-[10px] border-l-rose-600 border-[1px]" src={item.profile_photo} alt={item.fullname} />
                            </div>
                            <div className="flex w-[100%] justify-start">
                                <h1 className="text-[1.5rem]">{item.fullname}</h1>
                            </div>
                            <div className="ratings w-[100%] flex justify-between items-center">
                                <div className="w-[100px] border-[1px] flex items-center bg-emerald-500 rounded-[15px] ">
                                    <p>{item.specialty}</p>
                                </div>
                            </div>
                            <div className="flex w-[100%] justify-start">
                                <p>Total Patients: {item.total_patients}</p>
                            </div>
                            <p className="text_para">Hospital: {item.hospital}</p>
                            <Link to={`/doctors/${item._id}`}>
                                <div className="btn">   
                                    View more
                                </div>
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DoctorApi;
