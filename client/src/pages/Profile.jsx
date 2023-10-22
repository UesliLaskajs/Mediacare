import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    const [doctors, setDoctors] = useState([]);
    const [booked, setBooked] = useState(false);
    const navigate = useNavigate();

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

    const eventHandler = (e, id) => {
        e.preventDefault();
        axios.patch(`http://localhost:3000/doctor/edit/${id}`, {
            booked: booked
        })
            .then(() => {
                console.log("Successfully Sent");
                navigate("/profile");
            })
            .catch((err) => {
                console.log("Couldn't Post", err);
            });
    };

    return (
        <section>
            <div className="container">
                <div className='flex flex-col  justify-center items-center'>
                    {doctors.map((item, index) => (
                        item.booked === true ? (
                            <div key={index} className="w-[50%] flex flex-row justify-between items-center bg-gray-300 rounded-[20px] m-[10px] p-[20px]">
                                <div className="doctors_image w-[50%]">
                                    <img className="w-[330px] h-[330px] rounded-[10px] border-l-rose-600 border-[1px]" src={item.profile_photo} alt={item.fullname} />
                                </div>
                                <div className="w-[50%] flex flex-col justify-center items-center">
                                    <div className="heading">
                                        {item.fullname}
                                    </div>
                                    <div className="w-30px h-[30px] bg-yellow-500 border-[1px] rounded-[10px] ">
                                        <h1>{item.speciality}</h1>
                                    </div>
                                    <p>Total Patients: {item.total_patients}</p>
                                    <p className="text_para">Hospital: {item.hospital}</p>
                                    <p className="text_para">Education: {item.schooling}</p>
                                    <form onSubmit={(e) => eventHandler(e, item._id)}>
                                        <div className="mb-4">
                                            <label htmlFor="book" className="mr-[20px]">Book</label>
                                            <input
                                                type="checkbox"
                                                id="booked"
                                                name="booked"
                                                className="mt-1 rounded border border-gray-300 focus:ring-indigo-500 text-indigo-600"
                                                checked={booked}
                                                onChange={(e) => setBooked(e.target.checked)}
                                            />
                                        </div>
                                        <button className="btn">Book</button>
                                    </form>
                                </div>
                            </div>
                        ) : null
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Profile;
