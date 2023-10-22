import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useState } from "react";

const DoctorForm = () => {
    const [fullname, setFullname] = useState(" ")
    const [speciality, setSpecialty] = useState(" ")
    const [total_patients, setTotal_patients] = useState("")
    const [profile_photo, setProfile_photo] = useState("")
    const [hospital, setHospital] = useState("")
    const [description, setDescription] = useState("")
    const [schooling,setSchooling]=useState("")
    const [booked, setBooked] = useState(false)

    const [errors, setErrors] = useState([])
    const navigate = useNavigate();


    const eventHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/doctor/new", {
            fullname,
            speciality,
            total_patients,
            profile_photo,
            hospital,
            description,
            schooling,
            booked
        })
            .then(() => {
                navigate("/doctors")
            })
            .catch((err) => {
                if (err.response && err.response.data && err.response.data.errors) {
                    setErrors(err.response.data.errors)
                }
                else {
                    console.log("Error adding Doctor")
                }
            })
        setFullname('')
        setSpecialty('')
        setTotal_patients('')
        setProfile_photo('')
        setHospital('')
        setDescription('')
        setSchooling('')

    }
    return (
        <section className="pt-[60px]">
            <div className="container">
                <div className="flex flex-col justify-center items-center">
                    <div className="hero_sec ">
                        <h1 className="heading">Are you a Doctor ?</h1>
                    </div>
                    <div>
                        <form onSubmit={eventHandler} className="max-w-md mx-auto">
                            <div className="mb-4">
                                <label htmlFor="fullname" className="block text-sm font-medium text-gray-600">FullName:</label>
                                <input type="text" id="fullname" name="fullname"
                                    placeholder="Enter Fullname"
                                    className="mt-1 p-2 rounded border w-full focus:outline-none focus:border-blue-500"
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)} />
                                {errors.fullname && <p>{errors.fullname.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="speciality" className="block text-sm font-medium text-gray-600">Speciality:</label>
                                <input type="text" id="speciality" name="speciality"
                                    placeholder="Speciality"
                                    className="mt-1 p-2 rounded border w-full focus:outline-none focus:border-blue-500"
                                    value={speciality}
                                    onChange={(e) => setSpecialty(e.target.value)} />
                                {errors.speciality && <p>{errors.speciality.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="total_patients" className="block text-sm font-medium text-gray-600">Total Patients:</label>
                                <input type="number" id="total_patients" name="total_patients"
                                    className="mt-1 p-2 rounded border w-full focus:outline-none focus:border-blue-500"
                                    value={total_patients}
                                    onChange={(e) => setTotal_patients(e.target.value)} />
                                {errors.total_patients && <p>{errors.total_patients.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="profile_photo" className="block text-sm font-medium text-gray-600">Add IMG URL:</label>
                                <input type="text" id="profile_photo" name="profile_photo"
                                    placeholder="Image Url"
                                    className="mt-1 p-2 rounded border w-full focus:outline-none focus:border-blue-500"
                                    value={profile_photo}
                                    onChange={(e) => setProfile_photo(e.target.value)} />
                                {errors.profile_photo && <p>{errors.profile_photo.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="hospital" className="block text-sm font-medium text-gray-600">Hospital:</label>
                                <input type="text" id="hospital" name="hospital"
                                    placeholder="Hospital"
                                    className="mt-1 p-2 rounded border w-full focus:outline-none focus:border-blue-500"
                                    value={hospital}
                                    onChange={(e) => setHospital(e.target.value)} />
                                {errors.hospital && <p>{errors.hospital.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="schooling" className="block text-sm font-medium text-gray-600">School:</label>
                                <input type="text" id="schooling" name="schooling"
                                    placeholder="schooling"
                                    className="mt-1 p-2 rounded border w-full focus:outline-none focus:border-blue-500"
                                    value={schooling}
                                    onChange={(e) => setSchooling(e.target.value)} />
                                {errors.schooling && <p>{errors.schooling.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description:</label>
                                <textarea id="description" name="description"
                                    placeholder="Enter description"
                                    className="mt-1 p-2 rounded border w-full focus:outline-none focus:border-blue-500"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)} />
                                {errors.description && <p>{errors.description.message}</p>}
                            </div>


                            <div className="mb-4">
                                <label htmlFor="book" className="mr-[20px]">Booked</label>
                                <input
                                    type="checkbox"
                                    id="booked"
                                    name="booked"
                                    className="mt-1 rounded border border-gray-300 focus:ring-indigo-500 text-indigo-600"
                                    checked={booked}
                                    onChange={(e) => setBooked(e.target.checked)}
                                />


                            </div>

                            <div className="mt-4">
                                <button type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                    Submit
                                </button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default DoctorForm;