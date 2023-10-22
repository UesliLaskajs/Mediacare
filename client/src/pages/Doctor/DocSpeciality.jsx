import { useState, useEffect } from "react"
import axios from "axios"

import AboutDoctor from "./AboutDoctor"
import FeedbadckDoc from "./FeedbadckDoc"
import { useNavigate, useParams } from "react-router-dom"

const DocSpeciality = () => {
  const [tab, setTab] = useState("about")
  const [doctor, setDoctor] = useState('')
  const { id } = useParams();
  const [booked, setBooked] = useState(false)
  const navigate=useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/doctors/${id}`)
      .then((res) => {
        console.log(res.data)
        setDoctor(res.data)
      })
      .catch((err) => {
        console.log("Error getting specific Doctor Data", err)
      })
  }, [id])

  const eventHandler = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:3000/doctor/edit/${id}`, {
      booked
    })
      .then(() => {
        console.log("Succesfully Sent")
        navigate("/profile")
      })
      .catch((err) => {
        console.log("Couldnt Post", err)
      })
  }

  return (
    <>
      <section className="pt-[60px]">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="doctor_details w-[65%] flex ">
              <div className="img">
                <img className="w-[430px] h-[260px] rounded-[10px]" src={doctor.profile_photo} />
              </div>

              <div className="details flex flex-col   w-[500px] pl-[20px]">
                <div className="border border-l-sky-600 bg-primaryColor">{doctor.speciality}</div>
                <div className="heading">
                  {doctor.fullname}
                </div>
                <div className="rating flex justify-between items-center w-[100%]">
                  <div className="text-[2rem]">
                    Total Patients:{doctor.total_patients}
                  </div>
                </div>
                <div className="flex-col justify-center items-center w-[100%]">
                  <p className="text_para">{doctor.description}</p>
                </div>
              </div>
            </div>

            <div className="w-[30%] flex flex-col justify-center items-center bg-gray-100 rounded-[10px] h-[260px]">
              <div className="heading">
                Book {doctor.fullname} now
              </div>
              <form onSubmit={eventHandler}>
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

          <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
            <button className={`${tab === "about" && "border-b border-solid border-primaryColor pr-[30px]"}`} onClick={() => setTab("about")}>About</button>


            <button className={`${tab === "feedback" && "border-b border-solid border-primaryColor pl-[30px]"}`} onClick={() => setTab("feedback")}>Feedback</button>
          </div>

          <div className="mt-[50px]">
            {
              tab === 'about' && <AboutDoctor />
            }
            {
              tab === 'feedback' && <FeedbadckDoc />
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default DocSpeciality